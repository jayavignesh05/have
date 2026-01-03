import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, price, category, image, description, material, quantity, sizes } = body;

        if (!name || !price || !category) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Get a connection from the pool for logic
        const connection = await pool.getConnection();

        try {
            await connection.beginTransaction();

            // 1. Get or Insert Category
            let categoryId: number | null = null;
            const [existingCategories] = await connection.query<RowDataPacket[]>(
                "SELECT id FROM categories WHERE category_name = ?",
                [category]
            );

            if (existingCategories.length > 0) {
                categoryId = existingCategories[0].id;
            } else {
                const [catResult] = await connection.query<ResultSetHeader>(
                    "INSERT INTO categories (category_name) VALUES (?)",
                    [category]
                );
                categoryId = catResult.insertId;
            }

            // 2. Check or Insert Product
            let productId: number;
            const [existingProduct] = await connection.query<RowDataPacket[]>(
                "SELECT id FROM products WHERE name = ?",
                [name]
            );

            if (existingProduct.length > 0) {
                productId = existingProduct[0].id;
                // Optional: Update base product fields if needed
            } else {
                const [productResult] = await connection.query<ResultSetHeader>(
                    "INSERT INTO products (name, category_id, price, thumbnail_url, description, material) VALUES (?, ?, ?, ?, ?, ?)",
                    [name, categoryId, parseFloat(price), image || null, description || "", material || null]
                );
                productId = productResult.insertId;
            }

            // 3. Insert/Update Variants
            const variants = body.variants || [];

            // Legacy support
            if (variants.length === 0 && sizes && sizes.length > 0) {
                const qtyPerSize = quantity ? parseInt(quantity.toString()) : 0;
                sizes.forEach((s: string) => variants.push({ size: s, quantity: qtyPerSize }));
            }

            if (variants.length > 0) {
                for (const variant of variants) {
                    // Check if variant exists
                    const [existingVariant] = await connection.query<RowDataPacket[]>(
                        "SELECT id FROM product_variants WHERE product_id = ? AND size = ?",
                        [productId, variant.size]
                    );

                    if (existingVariant.length > 0) {
                        // Update existing variant quantity
                        await connection.query(
                            "UPDATE product_variants SET quantity = ? WHERE id = ?",
                            [variant.quantity, existingVariant[0].id]
                        );
                    } else {
                        // Insert new variant
                        await connection.query(
                            "INSERT INTO product_variants (product_id, size, quantity) VALUES (?, ?, ?)",
                            [productId, variant.size, variant.quantity]
                        );
                    }
                }
            }

            await connection.commit();

            return NextResponse.json({ message: "Product created/updated successfully", productId });

        } catch (err) {
            await connection.rollback();
            throw err;
        } finally {
            connection.release();
        }

    } catch (error: any) {
        console.error("Error creating product:", error);
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

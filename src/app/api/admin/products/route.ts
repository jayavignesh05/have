import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, price, category, image, description, quantity, sizes } = body;

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
            // We check if category matches 'category_name'
            let categoryId: number | null = null;

            const [existingCategories] = await connection.query<RowDataPacket[]>(
                "SELECT id FROM categories WHERE category_name = ?",
                [category]
            );

            if (existingCategories.length > 0) {
                categoryId = existingCategories[0].id;
            } else {
                // Insert new category
                const [catResult] = await connection.query<ResultSetHeader>(
                    "INSERT INTO categories (category_name) VALUES (?)",
                    [category]
                );
                categoryId = catResult.insertId;
            }

            // 2. Insert Product
            // Schema: id, name, category_id, price, image_url, description, created_at
            const [productResult] = await connection.query<ResultSetHeader>(
                "INSERT INTO products (name, category_id, price, image_url, description) VALUES (?, ?, ?, ?, ?)",
                [name, categoryId, parseFloat(price), image || null, description || ""]
            );

            const productId = productResult.insertId;

            // 3. Insert Variants (Sizes and Quantity)
            // Schema: id, product_id, size, quantity
            // Logic: If multiple sizes are selected, we distribute the quantity or apply it to each?
            // User request implies "Quintati" (Quantity). Let's apply the entered quantity to EACH size for now 
            // or assume the user inputs total stock.
            // Usually, quantity is per variant.
            if (sizes && sizes.length > 0) {
                const qtyPerSize = quantity ? parseInt(quantity.toString()) : 0;

                for (const size of sizes) {
                    await connection.query(
                        "INSERT INTO product_variants (product_id, size, quantity) VALUES (?, ?, ?)",
                        [productId, size, qtyPerSize]
                    );
                }
            } else {
                // Fallback if no size selected? Or maybe insert a "One Size" logic?
                // For now, if no size, we might skip variants or insert a default. 
                // Based on UI, user selects sizes.
            }

            await connection.commit();

            return NextResponse.json({ message: "Product created successfully", productId });

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

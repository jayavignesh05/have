import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        // 1. Fetch Product
        const products = await query(
            `SELECT p.id, p.name, p.price, p.thumbnail_url, p.description, c.category_name 
       FROM products p 
       LEFT JOIN categories c ON p.category_id = c.id
       WHERE p.id = ?`,
            [id]
        );

        if ((products as any[]).length === 0) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        const p = (products as any[])[0];

        // 2. Fetch Variants
        const variants = await query(
            `SELECT size, quantity FROM product_variants WHERE product_id = ?`,
            [id]
        );

        const formattedProduct = {
            id: p.id,
            name: p.name,
            price: `$${Number(p.price).toFixed(2)} USD`,
            image: p.thumbnail_url,
            category: p.category_name || "Uncategorized",
            description: p.description || "",
            variants: variants // Attach variants here
        };

        return NextResponse.json(formattedProduct);
    } catch (error: any) {
        console.error("Error fetching product:", error);
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

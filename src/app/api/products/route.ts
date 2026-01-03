import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
    try {
        const products = await query(
            `SELECT p.id, p.name, p.price, p.thumbnail_url, p.description, c.category_name 
       FROM products p 
       LEFT JOIN categories c ON p.category_id = c.id`
        );

        // Map database result to frontend expected format
        const formattedProducts = (products as any[]).map((p) => ({
            id: p.id,
            name: p.name,
            price: `$${Number(p.price).toFixed(2)} USD`, // Format price
            image: p.thumbnail_url,
            category: p.category_name || "Uncategorized",
            // Note: We selected c.category_name directly, so it comes out as category_name
        }));

        return NextResponse.json(formattedProducts);
    } catch (error: any) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

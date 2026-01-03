
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { query } from "./lib/db";
import { pool } from "./lib/db";

async function check() {
    try {
        console.log("Checking Categories...");
        const categories = await query("SELECT * FROM categories");
        console.log("Categories:", categories);

        console.log("\nChecking Products...");
        const products = await query(`
            SELECT p.id, p.name, p.category_id, c.category_name 
            FROM products p 
            LEFT JOIN categories c ON p.category_id = c.id
        `);
        console.table(products);

    } catch (e) {
        console.error(e);
    } finally {
        pool.end();
    }
}

check();

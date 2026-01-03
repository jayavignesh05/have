require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function checkDb() {
    console.log("Checking database connection...");
    console.log("Host:", process.env.TIDB_HOST);

    try {
        const pool = mysql.createPool({
            host: process.env.TIDB_HOST,
            port: Number(process.env.TIDB_PORT) || 4000,
            user: process.env.TIDB_USER,
            password: process.env.TIDB_PASSWORD,
            database: process.env.TIDB_DATABASE,
            ssl: {
                minVersion: 'TLSv1.2',
                rejectUnauthorized: true
            }
        });

        const connection = await pool.getConnection();
        console.log("✅ Connection Successful!");

        const [rows] = await connection.query("SHOW TABLES");
        console.log("Tables found:", rows.map(r => Object.values(r)[0]));

        connection.release();
        process.exit(0);
    } catch (error) {
        console.error("❌ Connection Failed:", error.message);
        process.exit(1);
    }
}

checkDb();

import { Kysely, MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';
import dotenv from 'dotenv';
import { Database } from '../type/database.js';

dotenv.config();

// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how 
// to communicate with your database.
const dialect = new MysqlDialect({
  pool: createPool({
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 3306,
    connectionLimit: 10,
  })
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely 
// knows your database structure.
export const db = new Kysely<Database>({
  dialect,
});

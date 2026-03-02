import { Pool } from "pg";

export const pool = new Pool({
    host:'localhost',
    database:'biblioteca_db',
    user:'postgres',
    password:'123456'
});
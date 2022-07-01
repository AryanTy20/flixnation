import dotenv from "dotenv";
dotenv.config();

export const { DB_HOST, DATABASE, USER, PASSWORD } = process.env;

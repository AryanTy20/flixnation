import { DATABASE, DB_HOST, PASSWORD, USER } from "./config";

export const MySQL = async () => {
  const mysql = require("mysql2/promise");
  const conn = await mysql.createConnection({
    host: DB_HOST,
    port: 3306,
    database: DATABASE,
    user: USER,
    password: PASSWORD,
  });
  return conn;
};

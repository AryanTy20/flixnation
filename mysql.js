export const MySQL = async () => {
  const mysql = require("mysql2/promise");
  const conn = await mysql.createConnection({
    host: "remotemysql.com",
    port: 3306,
    database: "XHdqwZQUDh",
    user: "XHdqwZQUDh",
    password: "HJmSZPvZcK",
  });
  return conn;
};

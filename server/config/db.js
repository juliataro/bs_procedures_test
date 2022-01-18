require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

let sql = "SELECT * FROM Procedures;";

pool.execute(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

module.exports = pool.promise();

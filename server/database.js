const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "juliataro0891",
  database: "procedures_test",
});

const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
});

// let sql = "SELECT * FROM symptoms;";

// pool.execute(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

module.exports = pool.promise();

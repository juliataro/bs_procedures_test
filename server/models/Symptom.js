const pool = require("../config/db");

const Symptom = function (symptom) {
  this.title_et = symptom.title_et;
  this.title_ru = symptom.title_ru;
  this.title_en = symptom.title_en;
};
// Create new Symptom
// Get All symptoms

// Symptom.getAll = function (result) {
//   pool.query("SELECT * FROM symptoms", function (err, res) {
//     if (err) {
//       console.log("Error while fetching symptoms", err);
//       result(null, err);
//     } else {
//       console.log("symptoms: ", res);
//       result(null, res);
//     }
//   });
// };

// module.exports = {
//   getAll: () => {
//     return new Promise((resolve, reject) => {
//       pool.query(`SELECT * FROM symptoms`, [], (error, results, fields) => {
//         if (error) {
//           return reject(error);
//         }
//         return resolve(results);
//       });
//     });
//   },
// };

Symptom.getAll = (title_et, result) => {
  console.log(getAll);
  let query = "SELECT * FROM symptoms";

  if (title_et) {
    query += ` WHERE title LIKE '%${title_et}%'`;
  }

  pool.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("symptoms: ", res);
    result(null, res);
  });
};

// find one

// Symptom.findById = (id, result) => {
//   pool.query(`SELECT * FROM symptoms WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found symptom: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found Tutorial with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// module.exports = Symptom;

const pool = require("../config/db");

const Symptom = function (symptom) {
  this.title_et = symptom.title_et;
  this.title_ru = symptom.title_ru;
  this.title_en = symptom.title_en;
};

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

module.exports = Symptom;

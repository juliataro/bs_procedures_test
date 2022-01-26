const db = require("../config/db");

class Symptom {
  constructor(title_et, title_ru, title_en) {
    this.title_et = title_et;
    this.title_ru = title_ru;
    this.title_en = title_en;
  }

  async save() {
    let sql = `
    INSERT INTO symptoms(
      title_et,
      title_ru,
      title_en
    )
    VALUES(
      '${this.title_et}',
      '${this.title_ru}',
      '${this.title_en}'
    )
    `;

    const [newSymptom, _] = await db.execute(sql);
    return newSymptom;
  }

  static findAll() {
    let sql = "SELECT * FROM symptoms;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM symptoms WHERE id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Symptom;

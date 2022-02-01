const db = require("../config/db");

// Contraindications DB table class
class Contrain {
  constructor(contr_title_et, contr_title_ru, contr_title_en) {
    this.contr_title_et = contr_title_et;
    this.contr_title_ru = contr_title_ru;
    this.contr_title_en = contr_title_en;
  }

  // Create new
  async saveNewContrain() {
    let sql = `INSERT INTO contraindications(contr_title_et,contr_title_ru,contr_title_en)
    VALUES('${this.contr_title_et}','${this.contr_title_ru}','${this.contr_title_en}')`;

    const [newContrain, _] = await db.execute(sql);
    return newContrain;
  }

  // Find all contraindications
  static findAll() {
    let sql = "SELECT * FROM contraindications;";
    return db.execute(sql);
  }

  // Find by ID
  static findById(id) {
    let sql = `SELECT * FROM contraindications WHERE id = ${id};`;
    return db.execute(sql);
  }

  static findByIdAndUpdate(id) {
    let sql = `UPDATE contraindications SET contr_title_et = ${this.contr_title_et}, 
    contr_title_ru = ${this.contr_title_ru}, contr_title_en = ${this.contr_title_en} WHERE id = ${id} ;`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM contraindications WHERE id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Contrain;

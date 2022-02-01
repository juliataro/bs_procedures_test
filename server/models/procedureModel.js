const db = require("../config/db");

// Contraindications DB table class
class Procedure {
  constructor(
    proc_title_et,
    proc_title_ru,
    proc_title_en,
    proc_descr_et,
    proc_descr_ru,
    proc_descr_en,
    proc_duration,
    proc_price
  ) {
    this.proc_title_et = proc_title_et;
    this.proc_title_ru = proc_title_ru;
    this.proc_title_en = proc_title_en;
    this.proc_descr_et = proc_descr_et;
    this.proc_descr_ru = proc_descr_ru;
    this.proc_descr_en = proc_descr_en;
    this.proc_duration = proc_duration;
    this.proc_price = proc_price;
  }

  // Create new
  async saveNewProcedure() {
    let sql = `INSERT INTO procedures(proc_title_et,proc_title_ru,proc_title_en,proc_descr_et,proc_descr_ru,proc_descr_en,proc_duration,proc_price)
    VALUES('${this.proc_title_et}','${this.proc_title_ru}','${this.proc_title_en}','${this.proc_descr_et}','${this.proc_descr_ru}','${this.proc_descr_en}','${this.proc_duration}','${this.proc_price}')`;

    const [newProcedure, _] = await db.execute(sql);
    return newProcedure;
  }

  // Find all procedures
  static findAll() {
    let sql = "SELECT * FROM procedures;";
    return db.execute(sql);
  }

  // Find by ID
  static findById(id) {
    let sql = `SELECT * FROM procedures WHERE id = ${id};`;
    return db.execute(sql);
  }

  static findByIdAndUpdate(id) {
    let sql = `UPDATE procedures SET proc_title_et = ${this.proc_title_et}, 
    proc_title_ru = ${this.proc_title_ru}, proc_title_en = ${this.proc_title_en} WHERE id = ${id} ;`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM procedures WHERE id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Procedure;

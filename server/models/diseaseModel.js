const db = require("../config/db");

// Symptom DB table class and and SQL methods

class Disease {
  constructor(dis_title_et, dis_title_ru, dis_title_en) {
    this.dis_title_et = dis_title_et;
    this.dis_title_ru = dis_title_ru;
    this.dis_title_en = dis_title_en;
  }

  async saveNewDisease() {
    let sql = `INSERT INTO diseases(dis_title_et,dis_title_ru,dis_title_en)
    VALUES('${this.dis_title_et}','${this.dis_title_ru}','${this.dis_title_en}')`;

    const [newDisease, _] = await db.execute(sql);
    return newDisease;
  }

  static findAll() {
    let sql = "SELECT * FROM diseases;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM diseases WHERE id = ${id};`;
    return db.execute(sql);
  }

  static findByIdAndUpdate(id) {
    let sql = `UPDATE diseases SET dis_title_et = ${this.dis_title_et}, dis_title_ru = ${this.dis_title_ru}, dis_title_en = ${this.dis_title_en} WHERE id = ${id} ;`;
    return db.execute(sql);
  }

  static deleteById(id) {
    let sql = `DELETE FROM diseases WHERE id = ${id};`;
    return db.execute(sql);
  }
}

module.exports = Disease;

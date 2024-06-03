const db = require("../common/connect")
const SuKien = function(SuKien) {
  this.id = SuKien.id;
  this.TieuDe = SuKien.TieuDe;
  this.ThoiGian = SuKien.ThoiGian;
  this.Thu = SuKien.Thu;
  this.GioBatDau = SuKien.GioBatDau;
  this.TomTatSK = SuKien.TomTatSK;
}

SuKien.get_all = function(result) {
  db.query("select * from SuKien", function(err, SuKien){
    if (err) {
      result(null);
      return;
    }
    else {
      result(SuKien);
    }
  });


}

SuKien.getById = function(id, result) {
  db.query(`select * from SuKien where id = ${id}`, function(err, SuKien){
    if (err || SuKien.length == 0) {
      result(null);
      return;
    }

    result(SuKien[0]);
  })
}

SuKien.create = function(data, result) {
  db.query(`insert into SuKien set ?`, data, function(err, SuKien) {
    if (err) {
      result(null);
      return;
    }
    result({id: SuKien.insertId, ...data});
  })
}

SuKien.remove = function(id, result) {
  db.query(`delete from SuKien where id = ${id}`, function(err, SuKien) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

SuKien.update = function(newData, result) {
  db.query("update SuKien set TieuDe = ?, ThoiGian = ?, Thu = ?, GioBatDau = ?, TomTatSK = ? where id = ?", [newData.TieuDe, newData.ThoiGian, newData.Thu, newData.GioBatDau, newData.TomTatSK, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = SuKien;
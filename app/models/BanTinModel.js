const db = require("../common/connect")
const BanTin = function(BanTin) {
  this.id = BanTin.id;
  this.TieuDe = ThongBao.TieuDe;
  this.NoiDung = ThongBao.NoiDung;
  this.SK_id = ThongBao.SK_id;
}

BanTin.get_all = function(result) {
  db.query("select * from BanTin", function(err, BanTin){
    if (err) {
      result(null);
      return;
    }
    else {
      result(BanTin);
    }
  });


}

BanTin.getById = function(id, result) {
  db.query(`select * from BanTin where id = ${id}`, function(err, BanTin){
    if (err || BanTin.length == 0) {
      result(null);
      return;
    }

    result(BanTin[0]);
  })
}

BanTin.create = function(data, result) {
  db.query(`insert into BanTin set ?`, data, function(err, BanTin) {
    if (err) {
      result(null);
      return;
    }
    result({id: BanTin.insertId, ...data});
  })
}

BanTin.remove = function(id, result) {
  db.query(`delete from BanTin where id = ${id}`, function(err, BanTin) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

BanTin.update = function(newData, result) {
  db.query("update BanTin set TieuDe = ?, NoiDung = ?, SK_id = ? where id = ?", [newData.TieuDe, newData.NoiDung, newData.SK_id, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = BanTin;
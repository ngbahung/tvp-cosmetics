const db = require("../common/connect")
const LichPhong = function(LichPhong) {
  this.id = LichPhong.id;
  this.ThoiGian = LichPhong.ThoiGian;
  this.TieuDe = LichPhong.TieuDe;
  this.GioBatDau = LichPhong.GioBatDau;
  this.Phong_id = LichPhong.Phong_id;
}

LichPhong.get_all = function(result) {
  db.query("select * from LichPhong", function(err, LichPhong){
    if (err) {
      result(null);
      return;
    }
    else {
      result(LichPhong);
    }
  });


}

LichPhong.getById = function(id, result) {
  db.query(`select * from LichPhong where id = ${id}`, function(err, LichPhong){
    if (err || LichPhong.length == 0) {
      result(null);
      return;
    }

    result(LichPhong[0]);
  })
}

LichPhong.create = function(data, result) {
  db.query(`insert into LichPhong set ?`, data, function(err, LichPhong) {
    if (err) {
      result(null);
      return;
    }
    result({id: LichPhong.insertId, ...data});
  })
}

LichPhong.remove = function(id, result) {
  db.query(`delete from LichPhong where id = ${id}`, function(err, LichPhong) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

LichPhong.update = function(newData, result) {
  db.query("update LichPhong set ThoiGian = ?, TieuDe = ?, GioBatDau = ?, Phong_id = ? where id = ?", [newData.ThoiGian, newData.TieuDe, newData.GioBatDau, newData.Phong_id, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = LichPhong;
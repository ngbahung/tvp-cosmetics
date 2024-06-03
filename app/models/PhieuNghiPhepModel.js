const db = require("../common/connect")
const PhieuNghiPhep = function(PhieuNghiPhep) {
  this.id = PhieuNghiPhep.id;
  this.LoaiNP = PhieuNghiPhep.LoaiNP;
  this.NgayKTNP = PhieuNghiPhep.NgayKTNP;
  this.NgayKTNP = PhieuNghiPhep.NgayKTNP;
  this.LyDo = PhieuNghiPhep.LyDo;
  this.NV_id = PhieuNghiPhep.NV_id;
}

PhieuNghiPhep.get_all = function(result) {
  db.query("select * from PhieuNghiPhep", function(err, PhieuNghiPhep){
    if (err) {
      result(null);
      return;
    }
    else {
      result(PhieuNghiPhep);
    }
  });


}

PhieuNghiPhep.getById = function(id, result) {
  db.query(`select * from PhieuNghiPhep where id = ${id}`, function(err, PhieuNghiPhep){
    if (err || PhieuNghiPhep.length == 0) {
      result(null);
      return;
    }

    result(PhieuNghiPhep[0]);
  })
}

PhieuNghiPhep.create = function(data, result) {
  db.query(`insert into PhieuNghiPhep set ?`, data, function(err, PhieuNghiPhep) {
    if (err) {
      result(null);
      return;
    }
    result({id: PhieuNghiPhep.insertId, ...data});
  })
}

PhieuNghiPhep.remove = function(id, result) {
  db.query(`delete from PhieuNghiPhep where id = ${id}`, function(err, PhieuNghiPhep) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

PhieuNghiPhep.update = function(newData, result) {
  db.query("update PhieuNghiPhep set LoaiNP = ?, NgayKTNP = ?, NgayKTNP = ?, LyDo = ?, NV_id = ? where id = ?", [newData.LoaiNP, newData.NgayKTNP, newData.NgayKTNP, newData.LyDo, newData.NV_id, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = PhieuNghiPhep;
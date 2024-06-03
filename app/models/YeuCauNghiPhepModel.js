const db = require("../common/connect")
const YeuCauNghiPhep = function(YeuCauNghiPhep) {
  this.id = YeuCauNghiPhep.id;
  this.STT = YeuCauNghiPhep.STT;
  this.TrangThai = YeuCauNghiPhep.TrangThai;
  this.PhieuNP_id = YeuCauNghiPhep.PhieuNP_id;
}

YeuCauNghiPhep.get_all = function(result) {
  db.query("select * from YeuCauNghiPhep", function(err, YeuCauNghiPhep){
    if (err) {
      result(null);
      return;
    }
    else {
      result(YeuCauNghiPhep);
    }
  });
}

YeuCauNghiPhep.getById = function(id, result) {
  db.query(`select * from YeuCauNghiPhep where id = ${id}`, function(err, YeuCauNghiPhep){
    if (err || YeuCauNghiPhep.length == 0) {
      result(null);
      return;
    }

    result(YeuCauNghiPhep[0]);
  })
}

YeuCauNghiPhep.create = function(data, result) {
  db.query(`insert into YeuCauNghiPhep set ?`, data, function(err, YeuCauNghiPhep) {
    if (err) {
      result(null);
      return;
    }
    result({id: YeuCauNghiPhep.insertId, ...data});
  })
}

YeuCauNghiPhep.remove = function(id, result) {
  db.query(`delete from YeuCauNghiPhep where id = ${id}`, function(err, YeuCauNghiPhep) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

YeuCauNghiPhep.update = function(newData, result) {
  db.query("update YeuCauNghiPhep set STT = ?, TrangThai = ?, PhieuNP_id = ? where id = ?", [newData.STT, newData.TrangThai, newData.PhieuNP_id, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = YeuCauNghiPhep;
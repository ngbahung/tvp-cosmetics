const db = require("../common/connect")
const TaiKhoan = function(TaiKhoan) {
  this.TenTaiKhoan = TaiKhoan.TenTaiKhoan;
  this.MatKhau = TaiKhoan.MatKhau;
  this.Email = TaiKhoan.Email;
  this.NV_id = TaiKhoan.NV_id;
  this.Quyen_id = TaiKhoan.Quyen_id;
}

TaiKhoan.get_all = function(result) {
  db.query("select * from TaiKhoan", function(err, TaiKhoan){
    if (err) {
      result(null);
      return;
    }
    else {
      result(TaiKhoan);
    }
  });


}

TaiKhoan.getByTenTaiKhoan = function(TenTaiKhoan, result) {
  db.query(`select * from TaiKhoan where TenTaiKhoan = "${TenTaiKhoan}"`, function(err, TaiKhoan){
    if (err || TaiKhoan.length == 0) {
      result(null);
      return;
    }

    result(TaiKhoan[0]);
  })
}

TaiKhoan.create = function(data, result) {
  db.query(`insert into TaiKhoan set ?`, data, function(err, TaiKhoan) {
    if (err) {
      result(null);
      return;
    }
    result({TenTaiKhoan: TaiKhoan.insertTenTaiKhoan, ...data});
  })
}

TaiKhoan.remove = function(TenTaiKhoan, result) {
  db.query(`delete from TaiKhoan where TenTaiKhoan = ${TenTaiKhoan}`, function(err, TaiKhoan) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

TaiKhoan.update = function(newData, result) {
  db.query("update TaiKhoan set MatKhau = ?, Email = ?, NV_TenTaiKhoan = ?, Quyen_TenTaiKhoan = ? where TenTaiKhoan = ?", [newData.MatKhau, newData.Email, newData.NV_TenTaiKhoan, newData.Quyen_TenTaiKhoan, newData.TenTaiKhoan], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = TaiKhoan;
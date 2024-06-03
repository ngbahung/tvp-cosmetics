const db = require("../common/connect")
const NhanVien = function(NhanVien) {
  this.id = NhanVien.id;
  this.HoTen = NhanVien.HoTen;
  this.GioiTinh = NhanVien.GioiTinh;
  this.NgaySinh = NhanVien.NgaySinh;
  this.CCCD = NhanVien.CCCD;
  this.SDT = NhanVien.SDT;
  this.ChucVu = NhanVien.ChucVu;
  this.PhongBan_id = NhanVien.PhongBan_id;
}

NhanVien.get_all = function(result) {
  db.query("select * from NhanVien", function(err, NhanVien){
    if (err) {
      result(null);
      return;
    }
    else {
      result(NhanVien);
    }
  });


}

NhanVien.getById = function(id, result) {
  db.query(`select * from NhanVien where id = ${id}`, function(err, NhanVien){
    if (err || NhanVien.length == 0) {
      result(null);
      return;
    }
    result(NhanVien[0]);
  })
}

NhanVien.create = function(data, result) {
  db.query(`insert into NhanVien set ?`, data, function(err, NhanVien) {
    if (err) {
      result(null);
      return;
    }
    result({id: NhanVien.insertId, ...data});
  })
}

NhanVien.remove = function(id, result) {
  db.query(`delete from NhanVien where id = ${id}`, function(err, NhanVien) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

NhanVien.update = function(newData, result) {
  db.query("update NhanVien set HoTen = ?, GioiTinh = ?, NgaySinh = ?, CCCD = ?, SDT = ?, ChucVu = ?, PhongBan_id = ? where id = ?", [newData.HoTen, newData.GioiTinh, newData.NgaySinh, newData.CCCD, newData.SDT, newData.ChucVu, newData.PhongBan_id, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = NhanVien;
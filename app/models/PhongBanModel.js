const db = require("../common/connect")
const PhongBan = function(PhongBan) {
  this.id = PhongBan.id;
  this.tenPhong = PhongBan.tenPhong;
  this.truongPhong_id = PhongBan.truongPhong_id;
}

PhongBan.get_all = function(result) {
  db.query("select * from PHONGBAN", function(err, PhongBan){
    if (err) {
      result(null);
      return;
    }
    else {
      result(PhongBan);
    }
  });


}

PhongBan.getById = function(id, result) {
  db.query(`select * from PHONGBAN where id = ${id}`, function(err, PhongBan){
    if (err || PhongBan.length == 0) {
      result(null);
      return;
    }

    result(PhongBan[0]);
  })
}

PhongBan.create = function(data, result) {
  db.query(`insert into PhongBan set ?`, data, function(err, PhongBan) {
    if (err) {
      result(null);
      return;
    }
    result({id: PhongBan.insertId, ...data});
  })
}

PhongBan.remove = function(id, result) {
  db.query(`delete from PhongBan where id = ${id}`, function(err, PhongBan) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

PhongBan.update = function(newData, result) {
  db.query("update PhongBan set tenPhong=?, truongPhong_id=? where id=?", [newData.tenPhong, newData.truongPhong_id, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = PhongBan;
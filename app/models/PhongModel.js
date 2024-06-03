const db = require("../common/connect")
const Phong = function(Phong) {
  this.id = Phong.id;
  this.TenPhong = Phong.TenPhong;
}

Phong.get_all = function(result) {
  db.query("select * from Phong", function(err, Phong){
    if (err) {
      result(null);
      return;
    }
    else {
      result(Phong);
    }
  });


}

Phong.getById = function(id, result) {
  db.query(`select * from Phong where id = ${id}`, function(err, Phong){
    if (err || Phong.length == 0) {
      result(null);
      return;
    }

    result(Phong[0]);
  })
}

Phong.create = function(data, result) {
  db.query(`insert into Phong set ?`, data, function(err, Phong) {
    if (err) {
      result(null);
      return;
    }
    result({id: Phong.insertId, ...data});
  })
}

Phong.remove = function(id, result) {
  db.query(`delete from Phong where id = ${id}`, function(err, Phong) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

Phong.update = function(newData, result) {
  db.query("update Phong set TenPhong = ? where id = ?", [newData.TenPhong, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = Phong;
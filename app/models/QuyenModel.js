const db = require("../common/connect")
const Quyen = function(Quyen) {
  this.id = Quyen.id;
  this.TenQuyen = Quyen.TenQuyen;
}

Quyen.get_all = function(result) {
  db.query("select * from Quyen", function(err, Quyen){
    if (err) {
      result(null);
      return;
    }
    else {
      result(Quyen);
    }
  });


}

Quyen.getById = function(id, result) {
  db.query(`select * from Quyen where id = ${id}`, function(err, Quyen){
    if (err || Quyen.length == 0) {
      result(null);
      return;
    }

    result(Quyen[0]);
  })
}

Quyen.create = function(data, result) {
  db.query(`insert into Quyen set ?`, data, function(err, Quyen) {
    if (err) {
      result(null);
      return;
    }
    result({id: Quyen.insertId, ...data});
  })
}

Quyen.remove = function(id, result) {
  db.query(`delete from Quyen where id = ${id}`, function(err, Quyen) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

Quyen.update = function(newData, result) {
  db.query("update Quyen set TenQuyen = ? where id = ?", [newData.TenQuyen, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = Quyen;
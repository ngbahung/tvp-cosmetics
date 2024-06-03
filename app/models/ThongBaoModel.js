const db = require("../common/connect")
const ThongBao = function(ThongBao) {
  this.id = ThongBao.id;
  this.TieuDe = ThongBao.TieuDe;
  this.NoiDung = ThongBao.NoiDung;
  this.SK_id = ThongBao.SK_id;
}

ThongBao.get_all = function(result) {
  db.query("select * from ThongBao", function(err, ThongBao){
    if (err) {
      result(null);
      return;
    }
    else {
      result(ThongBao);
    }
  });


}

ThongBao.getById = function(id, result) {
  db.query(`select * from ThongBao where id = ${id}`, function(err, ThongBao){
    if (err || ThongBao.length == 0) {
      result(null);
      return;
    }

    result(ThongBao[0]);
  })
}

ThongBao.create = function(data, result) {
  db.query(`insert into ThongBao set ?`, data, function(err, ThongBao) {
    if (err) {
      result(null);
      return;
    }
    result({id: ThongBao.insertId, ...data});
  })
}

ThongBao.remove = function(id, result) {
  db.query(`delete from ThongBao where id = ${id}`, function(err, ThongBao) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

ThongBao.update = function(newData, result) {
  db.query("update ThongBao set TieuDe = ?, NoiDung = ?, SK_id = ? where id = ?", [newData.TieuDe, newData.NoiDung, newData.SK_id, newData.id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = ThongBao;
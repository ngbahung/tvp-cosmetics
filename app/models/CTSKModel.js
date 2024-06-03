const db = require("../common/connect")
const CTSK = function(CTSK) {
  this.SK_id = CTSK.SK_id;
  this.NV_id = CTSK.NV_id;
}

CTSK.get_all = function(result) {
  db.query("select * from CTSK", function(err, CTSK){
    if (err) {
      result(null);
      return;
    }
    else {
      result(CTSK);
    }
  });


}

CTSK.getById = function(SK_id, NV_id, result) {
  db.query(`select * from CTSK where SK_id = ${SK_id} and NV_id = ${NV_id}`, function(err, CTSK){
    if (err || CTSK.length == 0) {
      result(null);
      return;
    }

    result(CTSK[0]);
  })
}

CTSK.create = function(data, result) {
  db.query(`insert into CTSK set ?`, data, function(err, CTSK) {
    if (err) {
      result(null);
      return;
    }
    result({SK_id: CTSK.insertSK_id, NV_id: CTSK.insertNV_id, ...data});
  })
}

CTSK.remove = function(SK_id, NV_id, result) {
  db.query(`delete from CTSK where SK_id = ${SK_id} and NV_id = ${NV_id}`, function(err, CTSK) {
    if (err) {
      result(null);
      return;
    }
    result("Xóa thành công!");
  })
}

CTSK.update = function(newData, SK_id, NV_id,  result) {
  db.query("update CTSK set SK_id = ?, NV_id = ? where SK_id = ? and NV_id = ?", [newData.SK_id, newData.NV_id, SK_id, NV_id], function(err) {
    if (err) {
      result(null);
      return;
    }
    result(newData);
  })
}

module.exports = CTSK;
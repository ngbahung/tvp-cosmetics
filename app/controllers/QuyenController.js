var Quyen = require('../models/QuyenModel')

exports.get_list = function(req, res) {
  Quyen.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  Quyen.getById(req.params.id, function (response) {
    //truyen vao 1 ham anonymous co tham so response, khi Quyenmodel detail dc goi thi se chay ham anonymos nay, va response se = data ben model, sau do result se forech response de tra ve du lieu
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  Quyen.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  Quyen.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  Quyen.update(data, function(response) {
    res.send({result : response});
  });
};
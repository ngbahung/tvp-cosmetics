var PhongBan = require('../models/PhongBanModel')

exports.get_list = function(req, res) {
  PhongBan.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  PhongBan.getById(req.params.id, function (response) {
    //truyen vao 1 ham anonymous co tham so response, khi PhongBanmodel detail dc goi thi se chay ham anonymos nay, va response se = data ben model, sau do result se forech response de tra ve du lieu
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  PhongBan.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  PhongBan.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  PhongBan.update(data, function(response) {
    res.send({result : response});
  });
};
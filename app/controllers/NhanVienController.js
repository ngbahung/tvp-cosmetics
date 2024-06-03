var NhanVien = require('../models/NhanVienModel')

exports.get_list = function(req, res) {
  NhanVien.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  NhanVien.getById(req.params.id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  NhanVien.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  NhanVien.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  NhanVien.update(data, function(response) {
    res.send({result : response});
  });
};
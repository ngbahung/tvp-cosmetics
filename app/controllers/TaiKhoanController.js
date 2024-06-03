var TaiKhoan = require('../models/TaiKhoanModel')

exports.get_list = function(req, res) {
  TaiKhoan.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  TaiKhoan.getByTenTaiKhoan(req.params.TenTaiKhoan, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  TaiKhoan.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var TenTaiKhoan = req.params.TenTaiKhoan;
  TaiKhoan.remove(TenTaiKhoan, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  TaiKhoan.update(data, function(response) {
    res.send({result : response});
  });
};
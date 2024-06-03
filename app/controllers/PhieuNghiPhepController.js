var PhieuNghiPhep = require('../models/PhieuNghiPhepModel')

exports.get_list = function(req, res) {
  PhieuNghiPhep.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  PhieuNghiPhep.getById(req.params.id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  PhieuNghiPhep.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  PhieuNghiPhep.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  PhieuNghiPhep.update(data, function(response) {
    res.send({result : response});
  });
};
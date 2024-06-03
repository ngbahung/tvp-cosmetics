var YeuCauNghiPhep = require('../models/YeuCauNghiPhepModel')

exports.get_list = function(req, res) {
  YeuCauNghiPhep.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  YeuCauNghiPhep.getById(req.params.id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  YeuCauNghiPhep.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  YeuCauNghiPhep.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  YeuCauNghiPhep.update(data, function(response) {
    res.send({result : response});
  });
};
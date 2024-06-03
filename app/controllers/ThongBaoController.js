var ThongBao = require('../models/ThongBaoModel')

exports.get_list = function(req, res) {
  ThongBao.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  ThongBao.getById(req.params.id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  ThongBao.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  ThongBao.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  ThongBao.update(data, function(response) {
    res.send({result : response});
  });
};
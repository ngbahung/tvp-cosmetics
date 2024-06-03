var LichPhong = require('../models/LichPhongModel')

exports.get_list = function(req, res) {
  LichPhong.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  LichPhong.getById(req.params.id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  LichPhong.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  LichPhong.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  LichPhong.update(data, function(response) {
    res.send({result : response});
  });
};
var Phong = require('../models/PhongModel')

exports.get_list = function(req, res) {
  Phong.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  Phong.getById(req.params.id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  Phong.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  Phong.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  Phong.update(data, function(response) {
    res.send({result : response});
  });
};
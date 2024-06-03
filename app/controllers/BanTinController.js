var BanTin = require('../models/BanTinModel')

exports.get_list = function(req, res) {
  BanTin.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  BanTin.getById(req.params.id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  BanTin.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  BanTin.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  BanTin.update(data, function(response) {
    res.send({result : response});
  });
};
var SuKien = require('../models/SuKienModel')

exports.get_list = function(req, res) {
  SuKien.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  SuKien.getById(req.params.id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  SuKien.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  var id = req.params.id;
  SuKien.remove(id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  SuKien.update(data, function(response) {
    res.send({result : response});
  });
};
var CTSK = require('../models/CTSKModel')

exports.get_list = function(req, res) {
  CTSK.get_all(function(data) {
    res.send({result : data});
  })
};

exports.detail = function(req, res) {
  CTSK.getById(req.params.SK_id, req.params.NV_id, function (response) {
    res.send({result : response});
  });
};

exports.add = function(req, res) {
  var data = req.body;
  CTSK.create(data, function(response) {
    res.send({result : response});
  });
};

exports.remove = function(req, res) {
  CTSK.remove(req.params.SK_id, req.params.NV_id, function(response) {
    res.send({result : response});
  })
};

exports.update = function(req, res) {
  var data = req.body;
  CTSK.update(data, req.params.SK_id, req.params.NV_id, function(response) {
    res.send({result : response});
  });
};
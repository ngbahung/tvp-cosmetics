module.exports = function(router) {
  var CTSKController = require('../controllers/CTSKController');

  router.get('/CTSK/list', CTSKController.get_list);
  
  router.get('/CTSK/detail/:SK_id/:NV_id', CTSKController.detail);

  router.post('/CTSK/add', CTSKController.add);

  router.delete('/CTSK/delete/:SK_id/:NV_id', CTSKController.remove);

  router.put('/CTSK/update/:SK_id/:NV_id', CTSKController.update);

};
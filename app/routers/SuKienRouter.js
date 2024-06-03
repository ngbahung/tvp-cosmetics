module.exports = function(router) {
  var SuKienController = require('../controllers/SuKienController');

  router.get('/SuKien/list', SuKienController.get_list);
  
  router.get('/SuKien/detail/:id', SuKienController.detail);

  router.post('/SuKien/add', SuKienController.add);

  router.delete('/SuKien/delete/:id', SuKienController.remove);

  router.put('/SuKien/update', SuKienController.update);

};
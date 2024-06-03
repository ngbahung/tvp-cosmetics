module.exports = function(router) {
  var PhongBanController = require('../controllers/PhongBanController');

  router.get('/PhongBan/list', PhongBanController.get_list);
  
  router.get('/PhongBan/detail/:id', PhongBanController.detail);

  router.post('/PhongBan/add', PhongBanController.add);

  router.delete('/PhongBan/delete/:id', PhongBanController.remove);

  router.put('/PhongBan/update', PhongBanController.update);

};
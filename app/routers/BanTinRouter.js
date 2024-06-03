module.exports = function(router) {
  var BanTinController = require('../controllers/BanTinController');

  router.get('/BanTin/list', BanTinController.get_list);
  
  router.get('/BanTin/detail/:id', BanTinController.detail);

  router.post('/BanTin/add', BanTinController.add);

  router.delete('/BanTin/delete/:id', BanTinController.remove);

  router.put('/BanTin/update', BanTinController.update);

};
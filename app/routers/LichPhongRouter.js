module.exports = function(router) {
  var LichPhongController = require('../controllers/LichPhongController');

  router.get('/LichPhong/list', LichPhongController.get_list);
  
  router.get('/LichPhong/detail/:id', LichPhongController.detail);

  router.post('/LichPhong/add', LichPhongController.add);

  router.delete('/LichPhong/delete/:id', LichPhongController.remove);

  router.put('/LichPhong/update', LichPhongController.update);

};
module.exports = function(router) {
  var NhanVienController = require('../controllers/NhanVienController');

  router.get('/NhanVien/list', NhanVienController.get_list);
  
  router.get('/NhanVien/detail/:id', NhanVienController.detail);

  router.post('/NhanVien/add', NhanVienController.add);

  router.delete('/NhanVien/delete/:id', NhanVienController.remove);

  router.put('/NhanVien/update', NhanVienController.update);

};
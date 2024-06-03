module.exports = function(router) {
  var TaiKhoanController = require('../controllers/TaiKhoanController');

  router.get('/TaiKhoan/list', TaiKhoanController.get_list);
  
  router.get('/TaiKhoan/detail/:TenTaiKhoan', TaiKhoanController.detail);

  router.post('/TaiKhoan/add', TaiKhoanController.add);

  router.delete('/TaiKhoan/delete/:TenTaiKhoan', TaiKhoanController.remove);

  router.put('/TaiKhoan/update', TaiKhoanController.update);

};
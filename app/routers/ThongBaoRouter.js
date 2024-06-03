module.exports = function(router) {
  var ThongBaoController = require('../controllers/ThongBaoController');

  router.get('/ThongBao/list', ThongBaoController.get_list);
  
  router.get('/ThongBao/detail/:id', ThongBaoController.detail);

  router.post('/ThongBao/add', ThongBaoController.add);

  router.delete('/ThongBao/delete/:id', ThongBaoController.remove);

  router.put('/ThongBao/update', ThongBaoController.update);

};
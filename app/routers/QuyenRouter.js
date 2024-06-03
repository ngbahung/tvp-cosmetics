module.exports = function(router) {
  var QuyenController = require('../controllers/QuyenController');

  router.get('/Quyen/list', QuyenController.get_list);
  
  router.get('/Quyen/detail/:id', QuyenController.detail);

  router.post('/Quyen/add', QuyenController.add);

  router.delete('/Quyen/delete/:id', QuyenController.remove);

  router.put('/Quyen/update', QuyenController.update);

};
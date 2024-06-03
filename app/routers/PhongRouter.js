module.exports = function(router) {
  var PhongController = require('../controllers/PhongController');

  router.get('/Phong/list', PhongController.get_list);
  
  router.get('/Phong/detail/:id', PhongController.detail);

  router.post('/Phong/add', PhongController.add);

  router.delete('/Phong/delete/:id', PhongController.remove);

  router.put('/Phong/update', PhongController.update);

};
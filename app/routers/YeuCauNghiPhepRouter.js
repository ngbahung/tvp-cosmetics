module.exports = function(router) {
  var YeuCauNghiPhepController = require('../controllers/YeuCauNghiPhepController');

  router.get('/YeuCauNghiPhep/list', YeuCauNghiPhepController.get_list);
  
  router.get('/YeuCauNghiPhep/detail/:id', YeuCauNghiPhepController.detail);

  router.post('/YeuCauNghiPhep/add', YeuCauNghiPhepController.add);

  router.delete('/YeuCauNghiPhep/delete/:id', YeuCauNghiPhepController.remove);

  router.put('/YeuCauNghiPhep/update', YeuCauNghiPhepController.update);

};
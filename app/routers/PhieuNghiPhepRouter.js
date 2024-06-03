module.exports = function(router) {
  var PhieuNghiPhepController = require('../controllers/PhieuNghiPhepController');

  router.get('/PhieuNghiPhep/list', PhieuNghiPhepController.get_list);
  
  router.get('/PhieuNghiPhep/detail/:id', PhieuNghiPhepController.detail);

  router.post('/PhieuNghiPhep/add', PhieuNghiPhepController.add);

  router.delete('/PhieuNghiPhep/delete/:id', PhieuNghiPhepController.remove);

  router.put('/PhieuNghiPhep/update', PhieuNghiPhepController.update);

};
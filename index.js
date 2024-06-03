var express = require('express');
var app = express();

//config body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//router
require('./app/routers/TrangChuRouter')(app);
require('./app/routers/PhongBanRouter')(app);
require('./app/routers/NhanVienRouter')(app);
require('./app/routers/QuyenRouter')(app);
require('./app/routers/TaiKhoanRouter')(app);
require('./app/routers/SuKienRouter')(app);
require('./app/routers/CTSKRouter')(app);
require('./app/routers/ThongBaoRouter')(app);
require('./app/routers/BanTinRouter')(app);
require('./app/routers/PhongRouter')(app);
require('./app/routers/LichPhongRouter')(app);
require('./app/routers/PhieuNghiPhepRouter')(app);
require('./app/routers/YeuCauNghiPhepRouter')(app);

app.listen(3000, function() { 
  console.log('Example app listening on port 3000!');
});
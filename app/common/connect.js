var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3301,
  user: 'root',
  password: '',
  database: 'qlct'
});

connection.connect(function(err) {
  if (err) {
    console.log("Can not connect to database. Please check the configuration of connection !!!");
  }
  else {
    console.log("Connect to database successfully !!!");
  }
})

module.exports = connection;
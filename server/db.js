var mysql = require('mysql');

var host = "localhost";
var user = "root";
var password = "Galahad@7250";
var database = "Management_Quota_Admission";

var con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});


module.exports = con;

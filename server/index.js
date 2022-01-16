const express = require("express");
var router = express.Router();

const con = require('./db');
const PORT = process.env.PORT || 3001;

const app = express();
var applicants = require('./routes/applicant.js');
var users = require('./routes/user.js');

app.use('/applicant', applicants);
app.use('/user', users);

con.connect(function(err){
    if(err)throw err;
    console.log("MySql Database Connected");
    // var sql = "CREATE TABLE Applicants (id INT(10), first_name VARCHAR(20), middle_name VARCHAR(30) ,last_name VARCHAR(20), gender VARCHAR(10), email VARCHAR(50), mob_no BIGINT, dob DATE)";
    // //var sql = "CREATE TABLE Users (id INT(10), Username VARCHAR(50), Password VARCHAR(50), Role VARCHAR(10), Email VARCHAR(50))";
    // con.query(sql, function (err, result) {  
    //      if (err) throw err;  
    //      console.log("Table created");
    // });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
var express = require('express');
const res = require('express/lib/response');
var con = require('../db.js');
var router = express.Router();

router.get('/', function(req, res)
{
    res.send('Get route on things. ');
});

router.get('/add_applicant',function(req, res)
{
    var sql = "INSERT INTO Applicants (id, first_name, middle_name, last_name, gender, email, mob_no, dob) VALUES (1, 'Lucifer', 'Ragav', 'Srivastav', 'Male', 'lucifer123@hotmail.com', 8790654780, '1994-04-19')";
    con.query(sql, function(err, result)
    {
        if(err)
        {
            throw err;
        }
        console.log("1 record inserted");
    });
    res.send('1 record inserted');
});

router.get('/view_applicant',function(req, res)
{
    var sql = "SELECT * FROM Applicants";
    con.query(sql, function(err, result,fields)
    {
        if(err)
        {
            throw err;
        }
        console.log(result[0]["first_name"]);
        res.send(result);
    });
});



router.post('/', function(req, res)
{
    res.send('Post route on applicant. ');
});

module.exports = router;
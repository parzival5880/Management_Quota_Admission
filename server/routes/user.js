var express = require('express');
const res = require('express/lib/response');
var con = require('../db.js');
var router = express.Router();

router.get('/', function(req, res)
{
    res.send('Get User. ');
});

router.get('/add_user',function(req, res)
{
    var sql = "INSERT INTO Users (id, Username, Password, Role, Email) VALUES (1, 'user1', 'user1','Admin','user1@hotmail.com')";
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

router.get('/view_user',function(req, res)
{
    var sql = "SELECT * FROM Users";
    con.query(sql, function(err, result,fields)
    {
        if(err)
        {
            throw err;
        }
        res.send(result);
    });
});

router.post('/', function(req, res)
{
    res.send('Post route in user. ');
});

module.exports = router;
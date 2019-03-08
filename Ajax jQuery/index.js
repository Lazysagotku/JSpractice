var express = require('express');
var jquery = require ('jquery');

var app = express();




app.get('/', function (req, res){
    res.render('index');
});
app.get('/page1', function (req, res){
    res.render('page1');
});
app.get('/page2', function (req, res){
    res.render('page2');
});





app.listen(8888);
console.log('Connected!');
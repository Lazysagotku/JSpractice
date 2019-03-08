var express = require ('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/about', function (req, res){
    res.render('about');
});

app.get('/test/:id', function (req, res){
    res.render('test', {testId: req.params.id});
});

app.listen(3000);  
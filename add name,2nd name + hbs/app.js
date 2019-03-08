/*jshint esversion: 6 */

const express = require('express');
const bodyParser=require('body-parser');
const app = express();

var contact = [
    {name:'Ivan', famil:'Arkhipov'},
    {name:'Arthur', famil:'Doronin'},
    {name:'Peter', famil:'Parker'}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', 'hbs');



app.get('/', (req, res) => {
    res.render('hbs', {
        class: 'klmnoprst'
    });
});

app.get('/name', (req, res) => {
    res.send('<h1>Ivan</h1>');
});

app.get('/json', (req, res) =>{
    res.send({a:1});
});

app.get('/man', (req, res) =>{
    res.render('man', {
        manQueue: contact
    });
});

app.post('/add', (req, res) =>{
    //console.log('In form added');
    //console.log(req.body.name);
    var newman = {
        name: req.body.name,
        famil: req.body.famil
    };
    contact.push(newman);
    res.redirect('/man');
});

app.listen(5000,  () => {
    console.log('yeeeey');
});
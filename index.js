const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database'); //Conectando com o Banco de dados

//View Engine
app.set('view engine','ejs');

//Static
app.use(express.static('public'));


//Body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Successful connection');
    }).catch((err) => {
        console.log(err);
    });


//Rotas
app.get('/', (req,res) =>{
    res.render('index.ejs');
});


app.listen(8080, () => {
    console.log('API starts');
});
const express=require("express");

const path=require('path');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));


app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

const homePage = require('./routes/home');
const { error404 } = require("./controller/error404");


app.use(homePage.routes);


app.use(error404);





app.listen(5000);
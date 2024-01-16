const express=require("express");
const fs = require("fs");
const path=require('path');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
    // const htmlFilePath = path.join(__dirname, 'views','index.html');
    // res.sendFile(htmlFilePath)
});

app.get('/review',function(req,res){
    res.render('review');
    // const htmlFilePath = path.join(__dirname, 'views','review.html');
    // res.sendFile(htmlFilePath)
});

app.get('/allReviews',function(req,res){

    const filePath = path.join(__dirname,'data','reviews.json');

    const fileData = fs.readFileSync(filePath);
    const storedReviews = JSON.parse(fileData);

    res.render('allReviews',{totalReviews:storedReviews.length, reviews:storedReviews});
})

app.post('/review',function(req,res){
    const movieReview= req.body;
    const filePath = path.join(__dirname,'data','reviews.json');

    const fileData = fs.readFileSync(filePath);
    const storedReviews = JSON.parse(fileData);
    storedReviews.push(movieReview);

    fs.writeFileSync(filePath,JSON.stringify(storedReviews));
    
    res.redirect('/allReviews');




    

});
app.listen(5000);
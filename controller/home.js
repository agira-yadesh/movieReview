const path = require('path');
const fs = require('fs');

exports.landingPage = function(req,res){
    res.render('index',{pgTitle:"Quentin Tarantino's",path:"/home"});
    // const htmlFilePath = path.join(__dirname, 'views','index.html');
    // res.sendFile(htmlFilePath)
};

exports.reviewPage = function(req,res){
    res.render('review',{pgTitle:'write a review',path:"/review"});
    // const htmlFilePath = path.join(__dirname, 'views','review.html');
    // res.sendFile(htmlFilePath)
};

exports.allreviewPage = function(req,res){

    const filePath = path.join(__dirname,'../','data','reviews.json');

    const fileData = fs.readFileSync(filePath);
    const storedReviews = JSON.parse(fileData);

    res.render('allReviews',{totalReviews:storedReviews.length, reviews:storedReviews,pgTitle:'Movies Review'});
};

exports.thanksPage = function(req,res){
    res.render('thanks',{pgTitle:'Thank you'});
    // const htmlFilePath = path.join(__dirname, 'views','review.html');
    // res.sendFile(htmlFilePath)
};
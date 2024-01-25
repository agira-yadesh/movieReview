const path = require('path');
const fs = require('fs');

exports.Post = function (req, res) {
    const movieReview = req.body;
    const filePath = path.join(__dirname, '../', 'data', 'reviews.json');

    const fileData = fs.readFileSync(filePath);
    const storedReviews = JSON.parse(fileData);
    // console.log(storedReviews);


    storedReviews.push(movieReview);

    fs.writeFileSync(filePath, JSON.stringify(storedReviews));

    res.redirect('/thanks');



};

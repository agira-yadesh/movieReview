
const db = require("../util/database");
const reviewModel = require('../models/reviews');

exports.landingPage = function (req, res) {
  res.render("index", { pgTitle: "Quentin Tarantino's"});
  // const htmlFilePath = path.join(__dirname, 'views','index.html');
  // res.sendFile(htmlFilePath)
};

exports.reviewPage = function (req, res) {
  res.render("review", { pgTitle: "write a review" });
  // const htmlFilePath = path.join(__dirname, 'views','review.html');
  // res.sendFile(htmlFilePath)
};

exports.allreviewPage = function (req, res) {
//   const filePath = path.join(__dirname, "../", "data", "reviews.json");

//   const fileData = fs.readFileSync(filePath);
//   const storedReviews = JSON.parse(fileData);
  reviewModel.getAllReviews()
  .then(r => {
    // console.log(r[0]);
    res.render("allReviews", {
      totalReviews: r[0].length,
      reviews: r[0],
      pgTitle: "Movies Review",
    });
  });
};





exports.thanksPage = function (req, res) {
  res.render("thanks", { pgTitle: "Thank you" });
  // const htmlFilePath = path.join(__dirname, 'views','review.html');
  // res.sendFile(htmlFilePath)
};

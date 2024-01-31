const db = require("../util/database");
const reviewModel = require('../models/reviews')

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

exports.Post = function (req, res) {
  const movieReview = req.body;

  currentDate = new Date();
  movieReview.reviewDate = formatDate(currentDate);
  const { Name, movieName, review, Rating, reviewDate } = movieReview;
  reviewModel.insertReview(Name, movieName,review,Rating,reviewDate);

  // db.execute("insert into reviews values(null,?,?,?,?,?)", [
  //   Name,
  //   movieName,
  //   review,
  //   Rating,
  //   reviewDate,
  // ]);




//   const filePath = path.join(__dirname, "../", "data", "reviews.json");

//   const fileData = fs.readFileSync(filePath);
//   const storedReviews = JSON.parse(fileData);
//   // console.log(storedReviews);

//   storedReviews.unshift(movieReview);
//   // console.log(storedReviews);

//   fs.writeFileSync(filePath, JSON.stringify(storedReviews));

  res.redirect("/thanks");
};

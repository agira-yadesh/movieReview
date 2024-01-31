const db = require("../util/database");
const reviewModel = require('../models/reviews')

exports.allreviewPageAdmin = function (req, res) {
      reviewModel.getAllReviews().then(r => {
        // console.log(r[0]);
        res.render("admin/admin", {
          totalReviews: r[0].length,
          reviews: r[0],
          pgTitle: "Movies Review"
        });
      });
    };

    exports.deletePost = function(req, res){
        const reviewId = req.params.id;
        reviewModel.deleteReviewById(reviewId)
        .then( r => {
          console.log(`Deleted${reviewId}`);
          res.redirect('/admin');
        })
        .catch(err => {
          console.error(err);
    
        });
      };

      exports.editreviewPage = function (req, res) {
        const Id = req.params.id;
        reviewModel.getReviewById(Id)
        .then(review => {
            const result = review[0][0];
            res.render("admin/editReview", { pgTitle: "edit review" , review:result});

        })
        
        
        // const htmlFilePath = path.join(__dirname, 'views','review.html');
        // res.sendFile(htmlFilePath)
      };
      
      exports.updateReview = function (req, res) {
        const Id = req.params.id;
        const name = req.body.Name || null; // Use null if the value is undefined
        const movie = req.body.movieName || null;
        const review = req.body.review || null;
        const rating = req.body.Rating || null;
        const date = req.body.reviewDate || null;

        console.log(Id);

        reviewModel.updateReviewById(Id, name, movie, review, rating , date)
        .then(() => {
           console.log(`updated${Id}`)
            res.redirect('/admin');

        })
        .catch((err) => {
            console.error(err);
            console.log("Parameters:", { Id, name, movie, review, rating, date });

        });
        
      };


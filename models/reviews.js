const db = require("../util/database");

class  reviewModel {
    static getAllReviews(){
        return db.execute("select * from reviews ORDER BY Date DESC");
    }

    static deleteReviewById(reviewId){
       return db.execute("delete from reviews where id = ?",[reviewId]);
    }

    static getReviewById(reviewId){
        return db.execute("select * from reviews where id = ?",[reviewId]);
    }

    static updateReviewById(Id, name, movie, review, rating, date){
        return db.execute(
            "UPDATE reviews SET name = ?, movie = ?, review = ?, rating = ?, date = ? WHERE id = ?",
            [name, movie, review, rating, date, Id]
        );
    }

    static insertReview(  Name,movieName,review,Rating,reviewDate){
        return  db.execute("insert into reviews values(null,?,?,?,?,?)", [
            Name,
            movieName,
            review,
            Rating,
            reviewDate,
          ]);

    }
};




module.exports = reviewModel;
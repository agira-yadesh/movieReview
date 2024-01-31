const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    database: 'movie_review',
    password: 'password'
});

module.exports = pool.promise();

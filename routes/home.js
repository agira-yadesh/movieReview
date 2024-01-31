const express = require('express');
const controller= require('../controller/home');
const postController = require('../controller/Post');


const router = express.Router();



router.get('/',controller.landingPage);

router.get('/review',controller.reviewPage);

router.post('/review',postController.Post);


router.get('/allReviews',controller.allreviewPage);

router.get('/thanks',controller.thanksPage);

exports.routes = router;
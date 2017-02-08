var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prabh Portfolio' });
});

/*GET Projects*/
router.get('/projects', function(req,res,next){
    res.render('projects');
});

/*GET Services*/
router.get('/services', function(req,res,next){
    res.render('services');
});

/*GET About*/
router.get('/about', function(req,res,next){
    res.render('about');
});

/*GET Contact*/
router.get('/contact', function(req,res,next){
    res.render('contact');
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/stream', function(req, res, next) {
    res.render('stream', { title: 'Express' });
});
router.get('/viewer', function(req, res, next) {
    res.render('viewer', { title: 'Express' });
});
router.get('/demo', function(req, res, next) {
    res.render('demo', { title: 'Express' });
});

module.exports = router;

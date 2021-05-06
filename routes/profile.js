var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile', { h1: '秘密の匿名掲示板', user: req.user });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: '秘密の匿名掲示板' });
});

module.exports = router;

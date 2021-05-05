var express = require('express');
const Post = require('../models/post');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  Post.findAll({
    order: [['id', 'DESC']]
  }).then((posts) => {
    if (posts) {
      console.log('POST:' + posts);
      res.render('posts', { posts: posts });
    // } else {
    //   const err = new Error('ERROR');
    //   err.status = 404;
    //   next(err);
    }
  })
});

module.exports = router;
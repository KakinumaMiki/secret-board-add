var express = require('express');
const Post = require('../models/post');
var router = express.Router();
const moment = require('moment-timezone');

/* GET */
router.get('/', function (req, res, next) {
  Post.findAll({
    order: [['id', 'DESC']]
  }).then((posts) => {
    posts.forEach((post) => {
      post.content = post.content.replace(/\+/g, ' ');
      post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');
    });
    console.log('POST:' + posts);
    res.render('posts', { posts: posts });
  })
});

router.post('/', function (req, res, next) {

  console.log('title: ' + req.body.title);
  console.log('content: ' + req.body.content);
  // console.log('postedBy: ' + req.body);





  Post.create({


    title: req.body.title,
    content: req.body.content,
    // postedBy: req.user.id


  }).then((post) => {

    res.redirect('/posts');
  });

});

module.exports = router;
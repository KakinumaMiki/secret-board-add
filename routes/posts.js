var express = require('express');
const Post = require('../models/post');
const User = require('../models/user');
var router = express.Router();
const moment = require('moment-timezone');

/* GET */
router.get('/', function (req, res, next) {
  let storedPost = null;
  let name = null;
  Post.findAll({
    order: [['id', 'DESC']]
  }).then((posts) => {
    posts.forEach((post) => {
      post.content = post.content.replace(/\+/g, ' ');
      post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');
      name = post.postedBy;
      console.log('user(name):' + name);
      console.log('user(post):' + post.postedBy);
      User.findOne({
        where: { userId: name}
      }).then((user) => {
        console.log(user.username);
      })
      res.render('posts',
      {
        posts: posts,
        user: req.user,
        // user: user.username,
        h1: '秘密の匿名掲示板'
      });
    })
    });
});

router.post('/', function (req, res, next) {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    postedBy: req.user.id
  }).then((post) => {
    res.redirect('/posts');
  });
});

module.exports = router;
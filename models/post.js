'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Post = loader.database.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: Sequelize.TEXT
  },
  postedBy: {
    type: Sequelize.INTEGER
  },
  trackingCookie: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  }
}, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        fields: ['postedBy']
      }
    ]
  });

module.exports = Post;
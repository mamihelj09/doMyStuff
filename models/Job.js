const Sequelize = require('sequelize');
const db = require('../config/database');

const Job = db.define('job', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  start_bid: {
    type: Sequelize.STRING
  },
  user_id: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Job;

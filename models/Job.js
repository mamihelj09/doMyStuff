const Sequelize = require('sequelize');

const User = require('./User');
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

// Job.belongsTo(User);

module.exports = Job;

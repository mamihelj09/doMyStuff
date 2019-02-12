const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  job_id: {
    type: Sequelize.INTEGER
  },
});

module.exports = User;

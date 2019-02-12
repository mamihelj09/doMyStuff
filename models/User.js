const Sequelize = require('sequelize');
const db = require('../config/database');
const bcrypt = require('bcryptjs');

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
  token: {
    type: Sequelize.INTEGER
  },
  job_id: {
    type: Sequelize.INTEGER
  },
});

User.prototype.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

// User.prototype.hashPassword = function(password) {

// }

module.exports = User;

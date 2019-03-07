const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const Job = require('./Job');
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
  token: {
    type: Sequelize.INTEGER
  }
});

User.hasMany(Job);

User.prototype.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

User.prototype.responseUser = function() {
  return {
    firstName: this.first_name,
    lastName: this.last_name,
    email: this.email,
    id: this.id
  }
}

module.exports = User;

const db = require('../config/database');
const User = require('../models/User');

function getSingleUser (email, password) {
  return User.findOne({
    where: {
      email, password
    }
  })
};

module.exports = {
  getSingleUser
};

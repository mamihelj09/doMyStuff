const User = require('../models/User');
const bcrypt = require('bcryptjs');

async function getSingleUser (email, password) {
  const user = await User.findOne({
    where: {
      email
    }
  });

  if (bcrypt.compareSync(password, user.password)) {
    return user;
  }

  return null;
};

module.exports = {
  getSingleUser
};

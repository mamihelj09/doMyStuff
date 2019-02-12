const User = require('../models/User');

async function getSingleUser(email, password) {
  const user = await User.findOne({
    where: {
      email
    }
  });

  if (user.validatePassword(password)) {
    return user;
  }

  return null;
};

module.exports = {
  getSingleUser
};

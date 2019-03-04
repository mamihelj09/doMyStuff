const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function getSingleUser(email, password) {
  const user = await User.findOne({
    where: {
      email
    }
  });

  if (!user) {
    return null;
  } else if (user.validatePassword(password)) {
    if (!user.token) {
      const token = jwt.sign({
        email,
        id: user.id,
      }, process.env.JWR_KEY, {
        expiresIn: '1h'
      });
      const updatedUser = await user.update({token});

      return updatedUser;
    }

    return user;
  }

  return null;
};

async function verifyAuth(token) {
  const user = await User.findOne({
    where: {
      token
    }
  });

  if (user) {
    return user;
  }

  return null;
}

async function getMe(id, email) {
  console.log(id, email)
  const user = await User.findOne({
    where: {
      email,
      id
    }
  });

  if (user) {
    return user;
  }

  return null;
}

module.exports = {
  getSingleUser,
  verifyAuth,
  getMe
};

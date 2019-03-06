const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

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
        expiresIn: '12h'
      });
      const updatedUser = await user.update({token});

      return updatedUser.responseUser();
    } else {
      try {
        jwt.verify(user.token, process.env.JWR_KEY);

        return user.responseUser();
      } catch (e) {
        const token = jwt.sign({
          email,
          id: user.id,
        }, process.env.JWR_KEY, {
          expiresIn: '12h'
        });

        const updatedUser = await user.update({token});
        return updatedUser.responseUser();

      }
    }
  }

  return null;
};

async function verifyAuth(token) {
  const user = await User.findOne({
    where: {
      token
    }
  });

  if (!user) {
    return null;
  }

  return user.responseUser();
}

async function getMe(id, email) {
  const user = await User.findOne({
    where: {
      email,
      id
    }
  });

  if (!user) {
    return null;
  }

  return user.responseUser();
}

async function createUser(first_name, last_name, password, email) {
  var salt = bcrypt.genSaltSync(10);
  var hashPassword = bcrypt.hashSync(password, salt)

  const user = await User.create({
    first_name,
    last_name,
    email,
    password: hashPassword
  })

  if (!user) {
    return null;
  }

  return user.responseUser();
}

module.exports = {
  getSingleUser,
  verifyAuth,
  getMe,
  createUser
};

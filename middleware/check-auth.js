const jwt = require('jsonwebtoken');
const userController = require('../controllers/users');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.JWR_KEY);
    req.userData = decodedToken;
    userController.verifyAuth(token).then((user) => {
      if (user) {
        if (user.id === decodedToken.id && user.email === decodedToken.email) {
          next();
        }
      } else {
        return res.send(401);
      }
    })
  } catch (e) {
    console.log('ERROR', e);
    return res.send(401);
  }
};

const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth');

// GET single user (login)
router.post('/login', (req, res) => {
  const { email, password} = req.body;
  userController.getSingleUser(email, password)
  .then((user) => {
    console.log('SUCCESS LOGIN');

    if (!user) {
      res.send(401);
    }

    res.json(200, user);
  })
  .catch((e) => {
    console.log(e);
    res.send(500);
  });
});

router.get('/me', checkAuth, (req, res) => {
  const { id, email } = req.userData;
  userController.getMe(id, email)
    .then((user) => {
      if (!user) {
        res.send(403);
      } else {
        res.json(200, user);
      }
    })
})

router.post('register', (req, res) => {
  res.send(200);
})

module.exports = router;

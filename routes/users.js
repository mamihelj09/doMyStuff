const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// GET single user (login)
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  userController.getSingleUser(email, password)
  .then((user) => {
    console.log('SUCCESS LOGIN');

    if (!user) {
      res.send(403);
    }

    res.json(200, user);
  })
  .catch((e) => {
    console.log(e);
    res.send(500);
  });
})

module.exports = router;

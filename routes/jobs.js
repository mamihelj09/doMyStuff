const express = require('express');
const router = express.Router();

const jobController = require('../controllers/jobs');
const checkAuth = require('../middleware/check-auth');

router.get('/all', (req, res) => {
  jobController.getAllJobs()
    .then((jobs) => {
      if (!jobs) {
        res.send(404);
      } else {
        res.json(200, jobs);
      }
    })
    .catch((e) => {
      res.send(500);
    })
})

router.put('/job', checkAuth, (req, res) => {
  const { title, description, start_bid } = req.body;

  jobController.createNewJob(title, description, start_bid, req.userData)
    .then((job) => {
      if (!job) {
        res.send(404);
      } else {
        res.json(200, job);
      }
    })
    .catch((e) => {
      console.log(e)
      res.send(500);
    })
})

router.delete('/job', checkAuth, (req, res) => {
  const { id } = req.query;
  jobController.deleteJob(id)
    .then((status) => {
      if (status) {
        res.send(204)
      } else {
        res.send(405)
      }
    })
    .catch((e) => {
      console.log(e);
      res.send(500);
    })
})

module.exports = router;

const Job = require('../models/Job');

async function getAllJobs() {
  const jobs = await Job.findAll();

  if (!jobs) {
    return null;
  }

  return jobs;
}

async function createNewJob(name, description, startBid, user) {
  const job = await Job.create({
    name,
    description,
    start_bid: startBid,
    user_id: user.id
  });

  if (!job) {
    return null
  }

  return job;
}

module.exports = {
  getAllJobs,
  createNewJob,
}

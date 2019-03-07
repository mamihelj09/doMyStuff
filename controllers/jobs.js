const Job = require('../models/Job');
const User = require('../models/User');

async function getAllJobs() {
  const jobs = await Job.findAll({
    // include: [
    //   {model: User}
    // ]
  });

  return jobs ? jobs : null;
}

async function createNewJob(name, description, startBid, user) {
  const job = await Job.create({
    name,
    description,
    start_bid: startBid,
    user_id: user.id
  });

  return job ? job : null;
}

async function deleteJob(id) {
  const job = await Job.destroy({
    where: { id }
  })

  return job;
}

module.exports = {
  getAllJobs,
  createNewJob,
  deleteJob,
}

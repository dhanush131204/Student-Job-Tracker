import Job from '../models/jobModel.js';

// ✅ Create a job
export const createJob = async (req, res) => {
  try {
    const { company, role, status, date, link } = req.body;
    const newJob = new Job({ company, role, status, date, link });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create job' });
  }
};

// ✅ Get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

// ✅ Delete job
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete job' });
  }
};

// ✅ Update status
export const updateJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const job = await Job.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(job);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update status' });
  }
};

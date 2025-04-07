import express from 'express';
import {
  getJobs,
  createJob,
  deleteJob,
  updateJobStatus,
} from '../controllers/jobController.js';

const router = express.Router();

router.get('/', getJobs);
router.post('/', createJob);
router.delete('/:id', deleteJob);
router.put('/:id', updateJobStatus);

export default router;

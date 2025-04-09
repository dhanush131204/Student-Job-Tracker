
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'] },
  date: String,
  link: String
});

export default mongoose.model('Job', jobSchema);

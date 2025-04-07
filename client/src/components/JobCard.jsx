import React from 'react';
import axios from 'axios';

const JobCard = ({ job, onDelete, onUpdate }) => {
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;

    try {
      const res = await axios.put(`http://localhost:5000/api/jobs/${job._id}`, {
        status: newStatus,
      });

      onUpdate(res.data); // pass the updated job back to parent
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p><strong>Role:</strong> {job.role}</p>
      <p><strong>Applied on:</strong> {new Date(job.date).toLocaleDateString()}</p>
      <p>
        <strong>Status:</strong>{' '}
        <select value={job.status} onChange={handleStatusChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </p>
      {job.link && (
        <p><a href={job.link} target="_blank" rel="noopener noreferrer">Job Link</a></p>
      )}
      <button onClick={() => onDelete(job._id)}>Delete</button>
    </div>
  );
};

export default JobCard;

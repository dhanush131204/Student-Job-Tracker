import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await axios.get('http://localhost:5000/api/jobs');
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/jobs/${id}`, {
        status: newStatus,
      });
      fetchJobs(); // Refresh after update
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/jobs/${id}`);
    fetchJobs();
  };

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div className="job-card" key={job._id}>
          <h3>{job.company}</h3>
          <p><strong>Role:</strong> {job.role}</p>
          <p>
            <strong>Status:</strong>
            <select
              value={job.status}
              onChange={(e) => handleStatusChange(job._id, e.target.value)}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </p>
          <p><strong>Date:</strong> {new Date(job.date).toLocaleDateString()}</p>
          <a href={job.link} target="_blank" rel="noreferrer">Job Link</a>
          <br />
          <button onClick={() => handleDelete(job._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
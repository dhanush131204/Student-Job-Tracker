import React, { useState } from "react";
import { addJob } from "../api";

const JobForm = ({ onJobAdded }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(formData);
    onJobAdded();
    setFormData({ company: "", role: "", status: "Applied", date: "", link: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
      <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input name="link" placeholder="Link" value={formData.link} onChange={handleChange} />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;

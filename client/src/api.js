import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change this to your backend URL after deployment
});

export const getJobs = () => API.get("/jobs");
export const addJob = (job) => API.post("/jobs", job);
export const updateJob = (id, updatedJob) => API.put(`/jobs/${id}`, updatedJob);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);

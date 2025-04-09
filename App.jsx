import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const handleUpdate = (updatedJob) => {
  setJobs((prevJobs) =>
    prevJobs.map((job) => (job._id === updatedJob._id ? updatedJob : job))
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
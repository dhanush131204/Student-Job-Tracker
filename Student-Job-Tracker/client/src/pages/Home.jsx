import React from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Home = () => {
  const [refresh, setRefresh] = React.useState(false);
  const refreshList = () => setRefresh(!refresh);

  return (
    <div className="container">
      <h1>Student Job Tracker</h1>
      <JobForm onJobAdded={refreshList} />
      <JobList key={refresh} />
    </div>
  );
};

export default Home;
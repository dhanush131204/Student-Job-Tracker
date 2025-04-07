function sortByAppliedDate(applications) {
    return applications.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
  }
  
  // example
  const jobApplications = [
    { company: "Google", role: "SDE Intern", appliedDate: "2025-04-01" },
    { company: "Amazon", role: "SDE Intern", appliedDate: "2025-03-20" },
    { company: "Meta", role: "SDE Intern", appliedDate: "2025-04-05" },
    { company: "Netflix", role: "SDE Intern", appliedDate: "2025-03-28" }
  ];
  
  const sortedJobs = sortByAppliedDate(jobApplications);
  console.log(sortedJobs);
  
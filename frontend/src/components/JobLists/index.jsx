import { useState, useEffect } from "react";

import JobItem from "../JobItem";

const JobLists = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    setJobs([
      {
        id: 1,
        company: "Photosnap",
        logo: "images/photosnap.svg",
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        role: "Frontend",
        level: "Senior",
        postedAt: "1d ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["HTML", "CSS", "JavaScript"],
        tools: [],
      },
    ]);
  }, []);

  if (!jobs) return null;
  return (
    <ul>
      {jobs.map((item) => (
        <JobItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default JobLists;

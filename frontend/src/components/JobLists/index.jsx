import { useState, useEffect } from "react";

import dataJson from "../../repositories/data.json";
import JobItem from "../JobItem";

const JobLists = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    setJobs(dataJson);
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

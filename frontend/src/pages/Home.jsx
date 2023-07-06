import { useState, useEffect } from "react";

import Header from "../components/Header";
import JobLists from "../components/JobLists";
import Filters from "../components/Filters";

import dataJson from "../repositories/data.json";

const Home = () => {
  const [jobs, setJobs] = useState(null);
  const [filters, setFilters] = useState(["Frontend", "CSS", "Javascript"]);

  useEffect(() => {
    setJobs(dataJson);
  }, []);

  function addFilter(filter) {
    setFilters((prevFilters) => [...prevFilters, filter]);
    console.log("add filter");
  }

  function removeFilter(filter) {
    console.log("remove filter");
    setFilters((prevFilters) => prevFilters.filter((item) => item !== filter));
  }

  return (
    <>
      <Header />
      <main className="bg-cyan-light min-h-[80vh] py-14">
        <div className="max-w-5xl m-auto">
          <div className="absolute top-36 w-full max-w-5xl">
            {filters && (
              <Filters data={filters} onRemoveFilter={removeFilter} />
            )}
          </div>
          <div>
            <JobLists data={jobs} onAddFilter={addFilter} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

import { useState, useEffect } from "react";

import Header from "../components/Header";
import JobLists from "../components/JobLists";
import Filters from "../components/Filters";

import dataJson from "../repositories/data.json";
const Home = () => {
  const [jobs, setJobs] = useState(null);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(dataJson);
  }, []);

  function addFilter(filter) {
    if (filters.indexOf(filter) === -1) {
      setFilters((prevFilters) => [...prevFilters, filter]);
    }
  }

  function removeFilter(filter) {
    setFilters((prevFilters) => prevFilters.filter((item) => item !== filter));
  }

  function clearFilters() {
    setFilters([]);
  }

  const jobsFiltered =
    filters.length === 0
      ? jobs
      : jobs?.filter(({ role, level, languages }) => {
          const requirements = [role, level, ...languages];
          const filtersFound = requirements.filter(
            (requirement) => filters.indexOf(requirement) > -1
          );
          return filtersFound.length === filters.length;
        });

  return (
    <>
      <Header />
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative -top-8 ">
          <div className="w-full max-w-5xl min-h-[4rem] mb-10">
            {filters.length > 0 && (
              <Filters
                data={filters}
                onRemoveFilter={removeFilter}
                onClearFilters={clearFilters}
              />
            )}
          </div>
          <div>
            <JobLists data={jobsFiltered} onAddFilter={addFilter} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

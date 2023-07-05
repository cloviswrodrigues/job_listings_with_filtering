import Header from "../components/Header";

import JobLists from "../components/JobLists";
import Filters from "../components/Filters";

const Home = () => {
  const selectedFilters = ["Frontend", "CSS", "Javascript"];
  return (
    <>
      <Header />
      <main className="bg-cyan-light min-h-[80vh] py-14">
        <div className="max-w-5xl m-auto">
          <div className="absolute top-36 w-full max-w-5xl">
            <Filters data={selectedFilters} />
          </div>
          <div>
            <JobLists />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

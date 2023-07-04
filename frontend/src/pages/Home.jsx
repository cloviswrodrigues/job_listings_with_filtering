import Header from "../components/Header";

import JobLists from "../components/JobLists";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-cyan-light min-h-[80vh] py-14">
        <div className="max-w-5xl m-auto">
          <JobLists />
        </div>
      </main>
    </>
  );
};

export default Home;

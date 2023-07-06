import PropTypes from "prop-types";

import JobItem from "../JobItem";

const JobLists = ({ data }) => {
  if (!data) return null;
  return (
    <ul>
      {data.map((item) => (
        <JobItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

JobLists.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default JobLists;

import PropTypes from "prop-types";

import JobItem from "../JobItem";

const JobLists = ({ data, onAddFilter }) => {
  if (!data) return null;
  return (
    <ul>
      {data.map((item) => (
        <JobItem key={item.id} data={item} onAddFilter={onAddFilter} />
      ))}
    </ul>
  );
};

JobLists.propTypes = {
  data: PropTypes.array,
  onAddFilter: PropTypes.func.isRequired,
};

export default JobLists;

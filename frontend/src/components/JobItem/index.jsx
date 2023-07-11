import PropTypes from "prop-types";

import ImageRounded from "../ImageRounded";
import Label from "../Label";

const JobItem = ({ data, onAddFilter }) => {
  const requirements = [data.role, data.level, ...data.languages] || [];

  function hasJobPostedLastTwoDays(postedAt) {
    return /[0-2]{1}d/.exec(postedAt);
  }

  const featuredJob = data.id <= 2 ? true : false;
  const styleFeaturedJob = featuredJob && "border-l-4 border-cyan-dark";
  const newJob = hasJobPostedLastTwoDays(data.postedAt) ? true : false;

  if (!data) return null;
  return (
    <li
      className={`bg-white p-7 rounded-md flex items-center gap-6 shadow-lg mb-6 ${styleFeaturedJob}`}
    >
      <div>
        <ImageRounded src={data.logo} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          <div>
            <span className="text-sm text-cyan-dark font-bold">
              {data.company}
            </span>
            {newJob && (
              <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                NEW!
              </span>
            )}
            {featuredJob && (
              <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                FEATURED
              </span>
            )}
          </div>
          <a
            href="#"
            className="block my-1 text-base font-bold hover:text-cyan-dark"
          >
            {data.position}
          </a>
          <ul className="flex text-cyan-dark-grayish gap-4 text-sm font-medium">
            <li>{data.postedAt}</li>
            <li className="before:content-['•'] before:mr-3 after:content-['•'] after:ml-3">
              {data.contract}
            </li>
            <li>{data.location}</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            {requirements.map((requirement) => (
              <li key={requirement}>
                <button onClick={() => onAddFilter(requirement)}>
                  <Label>{requirement}</Label>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

JobItem.propTypes = {
  data: PropTypes.shape().isRequired,
  onAddFilter: PropTypes.func.isRequired,
};

export default JobItem;

import PropTypes from "prop-types";

import ImageRounded from "../ImageRounded";
import LabelLink from "../LabelLink";

const JobItem = ({ data }) => {
  const requirements = [data.role, data.level, ...data.languages] || [];

  const featuredJob = data.id <= 1 ? true : false;
  const styleFeaturedJob = featuredJob && "border-l-4 border-cyan-dark";

  if (!data) return null;
  return (
    <li
      className={`bg-white p-7 rounded-md flex items-center gap-6 shadow-lg ${styleFeaturedJob}`}
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
          <ul className="flex text-cyan-dark-grayish gap-6 text-sm font-medium">
            <li>{data.postedAt}</li>
            <li>{data.contract}</li>
            <li>{data.location}</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            {requirements.map((requirement) => (
              <li key={requirement}>
                <LabelLink>{requirement}</LabelLink>
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
};

export default JobItem;

import PropTypes from "prop-types";

import ImageRounded from "../ImageRounded";
import LabelLink from "../LabelLink";

const JobItem = ({ data }) => {
  const requirements = [data.role, data.level, ...data.languages] || [];

  if (!data) return null;
  return (
    <li className="bg-white p-7 rounded-md border-l-4 border-cyan-dark flex items-center gap-6">
      <div>
        <ImageRounded src={data.logo} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          <span className="text-sm text-cyan-dark font-bold">
            {data.company}
          </span>
          <a href="#" className="block my-1 text-base font-bold">
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

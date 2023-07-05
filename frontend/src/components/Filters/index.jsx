import PropTypes from "prop-types";

import LabelLink from "../LabelLink";
import ButtonClose from "../ButtonClose";

const Filters = ({ data }) => {
  if (!data) return null;
  return (
    <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
      <ul className="flex gap-4">
        {data.map((filter) => (
          <li key={filter} className="flex">
            <LabelLink hover={false} roudendRight={false} clickable={false}>
              {filter}
            </LabelLink>
            <ButtonClose />
          </li>
        ))}
      </ul>
      <button className="text-sm text-cyan-dark font-bold underline">
        Clear
      </button>
    </div>
  );
};

Filters.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Filters;

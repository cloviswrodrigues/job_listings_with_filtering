import PropTypes from "prop-types";

const LabelLink = ({ children }) => {
  return (
    <a
      href="#"
      className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-md hover:bg-cyan-dark hover:text-white"
    >
      {children}
    </a>
  );
};

LabelLink.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LabelLink;

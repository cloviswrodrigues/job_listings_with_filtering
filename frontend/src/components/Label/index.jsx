import PropTypes from "prop-types";

const Label = ({
  children,
  hover = true,
  roudendRight = true,
  clickable = true,
}) => {
  const classHover = hover ? "hover:bg-cyan-dark hover:text-white" : "";
  const classRoudendRight = roudendRight ? "rounded-r-md" : "";
  const classClickable = !clickable ? "cursor-default" : "";
  const additionalClass = `${classHover} ${classRoudendRight} ${classClickable}`;

  return (
    <div
      className={`bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  ${additionalClass}`}
    >
      {children}
    </div>
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
  hover: PropTypes.bool,
  roudendRight: PropTypes.bool,
  clickable: PropTypes.bool,
};

Label.defaulProps = {
  hover: true,
  roudendRight: true,
  clickable: true,
};

export default Label;

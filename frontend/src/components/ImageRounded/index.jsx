import PropTypes from "prop-types";

const ImageRounded = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} className="rounded-full w-full" />
    </>
  );
};

ImageRounded.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageRounded;

import React from 'react';
import PropTypes from 'prop-types';

function ExampleCarouselImage({ src, alt }) {
  return (
    <img
      className="img-sertifikat"
      src={src}
      alt={alt}
    />
  );
}

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
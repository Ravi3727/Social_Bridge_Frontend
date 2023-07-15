import React from 'react';
import PropTypes from 'prop-types';

function MatchItem({ match }) {
  const { image, name } = match;

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-md shadow-md">
      <img src={image} alt={name} className="w-12 h-12 rounded-full" />
      <h2 className="text-lg font-semibold">{name}</h2>
    </div>
  );
}

MatchItem.propTypes = {
  match: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MatchItem;

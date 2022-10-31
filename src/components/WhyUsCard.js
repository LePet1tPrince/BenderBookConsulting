import React from 'react';
import PropTypes from 'prop-types';

const WhyUsCard = ({ data }) => (
  <div className="fullscreen">
      <h4 className="border ">{data.title}</h4>
  </div>
);

WhyUsCard.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  };

  
export default WhyUsCard;

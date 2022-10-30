import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
      <ul className="Statistics__list">
      <li className="Statistics__item">Good: {good}</li>
      <li className="Statistics__item">Neutral: {neutral}</li>
      <li className="Statistics__item">Bad: {bad}</li>
      <li className="Statistics__item">Total: {total}</li>
      <li className="Statistics__item">
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

export default Statistics;

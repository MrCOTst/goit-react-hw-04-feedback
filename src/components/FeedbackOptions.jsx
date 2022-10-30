import React from "react"
import PropTypes from 'prop-types';

const FeedbackOptions =({options, onLeaveFeedback}) => (
    <div className="Controls">
          {options.map(item => (
            <button
              type="button"
              key={item}
              className="Button"
              name={item}
              onClick={onLeaveFeedback}
            >
              {item}
            </button>
          ))}
        </div>
)

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
  };


export default FeedbackOptions;

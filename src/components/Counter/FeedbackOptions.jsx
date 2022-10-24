import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onClickBtns }) => (
  <div className="FeedbackField">
    <div className="FeedbackField__btn">
      <button type="button" name="good" onClick={onClickBtns}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onClickBtns}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onClickBtns}>
        Bad
      </button>
    </div>
  </div>
);

FeedbackOptions.propTypes = {
  onClickBtns: PropTypes.func,
};

export default FeedbackOptions;

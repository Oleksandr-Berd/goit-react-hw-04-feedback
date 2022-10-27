import React from 'react';
import css from './FeedbackOption.module.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={css.buttonContainer}>
    {options.map(option => (
      <button
        key={nanoid()}
        type="button"
        onClick={onLeaveFeedback}
        className={css.option__btn}
        data-content={option}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

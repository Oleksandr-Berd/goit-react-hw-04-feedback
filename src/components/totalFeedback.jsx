import React from 'react';
import PropTypes from 'prop-types';
import css from './TotalFeedback.module.css';

const TotalFeedback = ({ good, neutral, bad }) => (
  <li className={css.statistic__item}>Total: {good + neutral + bad}</li>
);

TotalFeedback.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default TotalFeedback;

import React from 'react';
import PropTypes from 'prop-types';
import css from './CountPositive.module.css';

const CountPositiveFeedbackPercentage = ({ good, neutral, bad }) => (
  <li className={css.statistic__item}>
    Positive feedback:{' '}
    {good === 0 && neutral === 0 && bad === 0
      ? 0
      : ((good / (good + bad + neutral)) * 100).toFixed(2) + '%'}
  </li>
);

CountPositiveFeedbackPercentage.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default CountPositiveFeedbackPercentage;

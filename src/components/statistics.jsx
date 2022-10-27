import React from 'react';
import PropTypes from 'prop-types';
import TotalFeedback from './totalFeedback';
import CountPositiveFeedbackPercentage from './countPositiveFeedbackPercentage';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => (
  <div className={css.statistic__feddback}>
    <p className={css.textStatistic}>Statistics</p>
    <ul className={css.statistic__list}>
      <li className={css.statistic__item}>Good: {good}</li>
      <li className={css.statistic__item}>Neutral: {neutral}</li>
      <li className={css.statistic__item}>Bad: {bad}</li>
      <TotalFeedback good={good} neutral={neutral} bad={bad} />
      <CountPositiveFeedbackPercentage
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </ul>
  </div>
);

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;

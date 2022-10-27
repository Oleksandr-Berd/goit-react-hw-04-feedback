import React from 'react';
import PropTypes from 'prop-types';
import css from './StatisticsSection.module.css';

const StatisticsSection = ({ title }) => (
  <div className={css.feedback}>
    <p className={css.text__feedback}>{title}</p>
  </div>
);

StatisticsSection.prototype = {
  title: PropTypes.string.isRequired,
};

export default StatisticsSection;

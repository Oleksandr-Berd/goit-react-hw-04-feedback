// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import css from './TotalFeedback.module.css';

export default function TotalFeedback({ good, neutral, bad }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => good + neutral + bad);
  }, [good, neutral, bad, total]);

  return <li className={css.statistic__item}>Total: {total}</li>;
}

// const TotalFeedback = ({ good, neutral, bad }) => (
//   <li className={css.statistic__item}>Total: {good + neutral + bad}</li>
// );

// TotalFeedback.prototype = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// };

// export default TotalFeedback;

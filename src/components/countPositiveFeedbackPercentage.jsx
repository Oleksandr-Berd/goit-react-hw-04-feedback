import { useEffect } from 'react';
import { useState } from 'react';
import css from './CountPositive.module.css';

export default function CountPositiveFeedbackPercentage({
  good,
  neutral,
  bad,
}) {
  const [totalPositive, setTotalPositive] = useState(0);

  useEffect(() => {
    setTotalPositive(
      () => ((good / (good + bad + neutral)) * 100).toFixed(2) + '%'
    );
  }, [good, neutral, bad, totalPositive]);

  return (
    <li className={css.statistic__item}>Positive feedback: {totalPositive}</li>
  );
}

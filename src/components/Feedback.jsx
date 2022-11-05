// import React from 'react';
import { useState } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './FeedbackOptions';
import StatisticsSection from './StatisicsSection';
import Notification from './Notification';

export default function FeedbackHooks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = evt => {
    const { textContent } = evt.target;

    textContent === 'good' && setGood(state => state + 1);
    textContent === 'neutral' && setNeutral(state => state + 1);
    textContent === 'bad' && setBad(state => state + 1);
  };

  return (
    <div>
      <StatisticsSection title={'Please leave feedback'} />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleIncrement}
      />
      {good > 0 || neutral > 0 || bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

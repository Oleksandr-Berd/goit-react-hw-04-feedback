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

    textContent === 'good' && setGood(prevState => prevState + 1);
    textContent === 'neutral' && setNeutral(prevState => prevState + 1);
    textContent === 'bad' && setBad(prevState => prevState + 1);
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

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = evt => {
//     evt.target.textContent === 'good' &&
//       this.setState(prevState => {
//         return { good: prevState.good + 1 };
//       });
//     evt.target.textContent === 'neutral' &&
//       this.setState(prevState => {
//         return { neutral: prevState.neutral + 1 };
//       });
//     evt.target.textContent === 'bad' &&
//       this.setState(prevState => {
//         return { bad: prevState.bad + 1 };
//       });
//   };

//   render() {
//     return (
//       <div>
//         <StatisticsSection title={'Please leave feedback'} />
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.handleIncrement}
//         />
//         {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }

// export default Feedback;

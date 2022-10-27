import React from 'react';
import Statistics from './statistics';
import FeedbackOptions from './FeedbackOptions';
import StatisticsSection from './StatisicsSection';
import Notification from './Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    evt.target.textContent === 'good' &&
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    evt.target.textContent === 'neutral' &&
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    evt.target.textContent === 'bad' &&
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
  };

  render() {
    return (
      <div>
        <StatisticsSection title={'Please leave feedback'} />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleIncrement}
        />
        {this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Feedback;

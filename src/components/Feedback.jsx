import React from 'react';
import './Feedback.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = item => {
    this.setState(prevState => {
      return {
        [item.target.name]: prevState[item.target.name] + 1,
      };
    });

    // console.log(item.target.name)
    // console.log(Object.keys(this.state));
    // console.log(Object.values(this.state));
  };
  render() {
    const countTotalFeedback = Object.values(this.state).reduce(
      (value, number) => {
        return value + number;
      },
      0
    );

    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100
    );

    return (
        <div className='Feedback'>
        <Section title='Please leave feedback'>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        ></FeedbackOptions>

      </Section>

      <Section title='Statistics'>

      {countTotalFeedback > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <p>There is no feedback</p>
        )}
        </Section>
        </div>
    );
  }
}

export default Feedback;

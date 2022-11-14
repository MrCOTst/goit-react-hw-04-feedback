import { useState } from 'react';
import './Feedback.css';
import Statistics from './Statistics';
import Section from './Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counterFeedback = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        throw new Error(`Unknows feedback type ${type}`);
    }
  };

  // const counterGood = () => {
  //   setGood(state => state + 1);
  // };
  // const counterBad = () => {
  //   setBad(state => state + 1);
  // };
  // const counterNeutral = () => {
  //   setNeutral(state => state + 1);
  // };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  return (
    <div className="Feedback">
      <Section title="Please leave feedback">
        <div className="Controls">
          <button
            type="button"
            className="Button"
            name="good"
            onClick={() => counterFeedback('good')}
          >
            Good
          </button>

          <button
            type="button"
            className="Button"
            name="neutral"
            onClick={() => counterFeedback('neutral')}
          >
            Neutral
          </button>

          <button
            type="button"
            className="Button"
            name="bad"
            onClick={() => counterFeedback('bad')}
          >
            Bad
          </button>
        </div>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
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

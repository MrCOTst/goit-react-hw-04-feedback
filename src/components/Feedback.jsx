import { useState } from 'react';
import './Feedback.css';
import Statistics from './Statistics';
import Section from './Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counterGood = () => {
    setGood(state => state + 1);
  };
  const counterBad = () => {
    setBad(state => state + 1);
  };
  const counterNeutral = () => {
    setNeutral(state => state + 1);
  };

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
            onClick={counterGood}
          >
            Good
          </button>

          <button
            type="button"
            className="Button"
            name="neutral"
            onClick={counterNeutral}
          >
            Neutral
          </button>

          <button
            type="button"
            className="Button"
            name="bad"
            onClick={counterBad}
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

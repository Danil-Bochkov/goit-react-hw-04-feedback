import { useState } from 'react';
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

import './Counter.scss';

function Counter() {
  const [goodReview, setGoodReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [badReview, setBadReview] = useState(0);

  const handleBtnsChange = btn => {
    switch (btn.target.name) {
      case 'good':
        setGoodReview(state => state + 1);
        break;
      case 'neutral':
        setNeutralReview(state => state + 1);
        break;
      case 'bad':
        setBadReview(state => state + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => goodReview + neutralReview + badReview;

  const countPositiveFeedbackPercentage = () =>
    Math.round((goodReview * 100) / countTotalFeedback());

  return (
    <div className="Counter">
      <Section title="Please leave feedback">
        <FeedbackOptions onClickBtns={handleBtnsChange} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={goodReview}
          neutral={neutralReview}
          bad={badReview}
          total={countTotalFeedback()}
          percentegeGoodFeedback={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

export default Counter;

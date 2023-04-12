import { useState } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions';
import Notification from './notification/Notification';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import { Container } from './container/Container.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
    }
  };

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage =
    totalFeedback && Math.round((good / totalFeedback) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!totalFeedback ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
};

export default App;

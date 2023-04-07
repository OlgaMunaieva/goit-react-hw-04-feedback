import { ContainerButtons, Button } from './Feedback.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ContainerButtons>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option.replace(option.slice(0, 1), option.slice(0, 1).toUpperCase())}
        </Button>
      ))}
      {/* <Button onClick={addGood}>Good</Button>
      <Button onClick={addNeutral}>Neutral</Button>
      <Button onClick={addBad}>Bad</Button> */}
    </ContainerButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

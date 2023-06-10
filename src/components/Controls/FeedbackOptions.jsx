import { Component } from 'react';
import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedBackOptions extends Component {
  static propTypes = {
    options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.feedbackOptions}>
        {options.map(option => (
          <button
            className={css.button55}
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            <span className="glowing-txt">{option}</span>
          </button>
        ))}
      </div>
    );
  }
}

export default FeedBackOptions;

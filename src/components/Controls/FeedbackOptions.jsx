import { Component } from 'react';
import propTypes from 'prop-types';

class FeedBackOptions extends Component {
  static propTypes = {
    options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedBackOptions;

import { Component } from 'react';
import propTypes from 'prop-types';

class Statistics extends Component {
  static propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage} %</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;

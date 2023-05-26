import React, { Component } from 'react';
import './App.module.css';

class App extends Component {
  static defaultsProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleFeedbackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleFeedbackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};
  countNeutralFeedbackPercentage = () => {};
  countBadFeedbackPercentage = () => {};

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <p>
          <button type="button" onClick={this.handleFeedbackGood}>
            Good
          </button>
        </p>
        <p>
          <button type="button" onClick={this.handleFeedbackNeutral}>
            Neutral
          </button>
        </p>
        <p>
          <button type="button" onClick={this.handleFeedbackBad}>
            Bad
          </button>
        </p>
        <p>Statistics:</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: 000</li>
          <li>Positive feedback: 0%</li>
          <li>Neutral feedback: 0%</li>
          <li>Bad feedback: 0%</li>
        </ul>
      </div>
    );
  }
}

export default App;

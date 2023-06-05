import React, { Component } from 'react';
import './App.module.css';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleFeedbackGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleFeedbackNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleFeedbackBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good * 100) / this.countTotalFeedback()).toFixed()
      : 0;
  };

  render() {
    return (
      <>
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
        {this.countTotalFeedback() !== 0 && (
          <div>
            <p>Statistics:</p>
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {this.countTotalFeedback()}</li>
              <li>
                Positive feedback: {this.countPositiveFeedbackPercentage()} %
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default App;

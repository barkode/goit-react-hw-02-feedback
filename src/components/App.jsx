import React, { Component } from 'react';
import FeedBackOptions from './Controls/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notifiration';
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
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good * 100) / this.countTotalFeedback()).toFixed()
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
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
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;

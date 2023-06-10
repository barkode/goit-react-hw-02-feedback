import { Component } from 'react';
import propTypes from 'prop-types';

class Notification extends Component {
  static propTypes = {
    message: propTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return <div>{message}</div>;
  }
}

export default Notification;

import { Component } from 'react';
import propTypes from 'prop-types';

class Section extends Component {
  static propTypes = {
    title: propTypes.string,
    children: propTypes.node.isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;

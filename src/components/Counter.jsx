import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Counter extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({count: this.state.count+1});
  }

  decrement = () => {
    this.setState({count: this.state.count-1});
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
          <button onClick={this.decrement} >-</button>
          <span> {this.state.count} </span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

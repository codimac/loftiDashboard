import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '@modules/Counter/Counter.actions';

class Counter extends React.Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const { increment, decrement, count } = this.props;
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={e => increment()}>+</button>
        <h3>{count}</h3>
        <button onClick={e => decrement()}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

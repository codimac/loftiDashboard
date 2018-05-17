import React from 'react';
import Proptypes from 'prop-types';

class FilterLink extends React.Component {

  static propTypes = {
    children: Proptypes.string.isRequired,
    onClick: Proptypes.func.isRequired,
    resetFilter: Proptypes.func.isRequired
  };

  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    const { children, onClick } = this.props;

    return (
      <h5 onClick={onClick} className="link link__black">{ children }</h5>
    );
  }

}

export default FilterLink;

import React from 'react';
import Proptypes from 'prop-types';

class FilterLink extends React.Component {

  static propTypes = {
    children: Proptypes.string.isRequired,
    onClick: Proptypes.func.isRequired,
    resetFilter: Proptypes.func.isRequired,
    className: Proptypes.string
  };

  componentWillUnmount() {
    this.props.resetFilter();
  }

  activeClass = ev => {
    const current = document.querySelectorAll('.link__filter.active')[0];
    current.classList.remove('active');
    this.filterRef.classList.add('active');
  }

  render() {
    const { children, onClick, className } = this.props;

    return (
      <h5 onClick={() => { onClick(); this.activeClass(); }} ref={el => this.filterRef = el} className={`link link__black link__filter ${className || ''}`}>{ children }</h5>
    );
  }

}

export default FilterLink;

import React from 'react';

class FilterLink extends React.Component {

  render() {
    const { children, onClick } = this.props;

    return (
      <h5 onClick={onClick} className="link link__black">{ children }</h5>
    );
  }

}

export default FilterLink;

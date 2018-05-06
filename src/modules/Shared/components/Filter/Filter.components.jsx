import React from 'react';
import Proptypes from 'prop-types';

class Filter extends React.Component {

  static propTypes = {
    onChange: Proptypes.func.isRequired
  };

  render() {
    const { onChange } = this.props;
    return (
      <input type="text" placeholder="filter" onChange={onChange} />
    );
  }

}

export default Filter;

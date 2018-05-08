import React from 'react';
import Proptypes from 'prop-types';

class Filter extends React.Component {

  static propTypes = {
    onChange: Proptypes.func.isRequired,
    resetFilter: Proptypes.func.isRequired,
    placeholder: Proptypes.string.isRequired
  };

  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    const { onChange, placeholder } = this.props;
    return (
      <input type="text" onChange={onChange} placeholder={placeholder} />
    );
  }


}

export default Filter;

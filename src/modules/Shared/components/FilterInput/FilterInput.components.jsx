import React from 'react';
import Proptypes from 'prop-types';

class FilterInput extends React.Component {

  static propTypes = {
    onChange: Proptypes.func.isRequired,
    resetFilter: Proptypes.func.isRequired,
    placeholder: Proptypes.string.isRequired,
    value: Proptypes.string.isRequired
  };

  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    const { onChange, placeholder, value } = this.props;

    return (
      <input type="text" onChange={onChange} placeholder={placeholder} value={value} />
    );
  }


}

export default FilterInput;

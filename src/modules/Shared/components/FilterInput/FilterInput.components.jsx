import React from 'react';
import Proptypes from 'prop-types';
import Input from '@Shared/components/Input/Input.components';

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
      <div>
        <Input type="text" onChange={onChange} placeholder={placeholder} value={value} />
      </div>
    );
  }


}

export default FilterInput;

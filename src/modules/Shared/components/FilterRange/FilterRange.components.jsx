import React from 'react';
import InputRange from 'react-input-range';
import Proptypes from 'prop-types';

class FilterRange extends React.Component {

  static propTypes = {
    onChange: Proptypes.func.isRequired,
    resetFilter: Proptypes.func.isRequired,
    grades: Proptypes.shape({
      min: Proptypes.number.isRequired,
      max: Proptypes.number.isRequired
    }).isRequired
  };

  componentWillUnmount() {
    console.log(this.props);
    this.props.resetFilter();
  }

  render() {
    const { grades, onChange } = this.props;
    return (
      <InputRange
        minValue={0}
        maxValue={20}
        step={1}
        value={grades}
        onChange={onChange}
      />
    );
  }

}

export default FilterRange;

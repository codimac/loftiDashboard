import React from 'react';
import InputRange from 'react-input-range';
import Proptypes from 'prop-types';

class FilterRange extends React.Component {

  static propTypes = {
    onChange: Proptypes.func.isRequired,
    grades: Proptypes.shape({
      min: Proptypes.number.isRequired,
      max: Proptypes.number.isRequired
    }).isRequired
  };

  render() {
    return (
      <InputRange
        minValue={0}
        maxValue={20}
        step={1}
        value={this.props.grades}
        onChange={this.props.onChange}
      />
    );
  }

}

export default FilterRange;

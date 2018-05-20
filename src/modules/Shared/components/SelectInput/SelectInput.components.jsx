import React from 'react';
import Proptypes from 'prop-types';

import './SelectInput.styles';

class SelectInput extends React.Component {

  static propTypes = {
    items: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired,
      value: Proptypes.oneOfType([
        Proptypes.string.isRequired,
        Proptypes.number.isRequired
      ]).isRequired,
    })).isRequired,
    placeholder: Proptypes.string.isRequired,
    required: Proptypes.bool,
    selected: Proptypes.number,
    onChange: Proptypes.func,
    className: Proptypes.string
  };

  render() {
    const { items, placeholder, onChange, required, selected, className } = this.props;
    return (
      <select defaultValue={selected || 0} onChange={onChange} className={`select ${className}`} required>
        <option value="0" className="option" disabled>{placeholder}</option>
        { items.map(item => (
          <option key={item.id+1} value={item.value} className="option">{item.label}</option>
        ))}
      </select>
    );
  }

}

export default SelectInput;

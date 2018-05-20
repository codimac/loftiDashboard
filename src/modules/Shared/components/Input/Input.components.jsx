import React from 'react';
import Proptypes from 'prop-types';

import './Input.styles';

class Input extends React.Component {

  static propTypes = {
    type: Proptypes.string.isRequired,
    name: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
    className: Proptypes.string,
    onChange: Proptypes.func,
    placeholder: Proptypes.string,
    min: Proptypes.number,
    value: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
    defaultValue: Proptypes.oneOfType([Proptypes.string, Proptypes.number])
  };

  render() {
    const { type, name, min, className, onChange, placeholder, value, defaultValue } = this.props;
    return (
      <div className={`${className} input__animated`}>
        <input type={type} name={name} value={value} min={min} defaultValue={defaultValue} placeholder={placeholder} onChange={onChange} />
        <span className="input__animation"></span>
      </div>
    );
  }

}

export default Input;

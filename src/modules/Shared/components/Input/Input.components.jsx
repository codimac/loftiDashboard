import React from 'react';
import Proptypes from 'prop-types';

import './Input.styles';

class Input extends React.Component {

  static propTypes = {
    type: Proptypes.string.isRequired,
    name: Proptypes.string,
    className: Proptypes.string,
    value: Proptypes.string,
    onChange: Proptypes.func,
    placeholder: Proptypes.string
  };

  render() {
    const { type, name, className, value, onChange, placeholder } = this.props;
    return (
      <div className={`${className} input__animated`}>
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
        <span className="input__animation"></span>
      </div>
    );
  }

}

export default Input;

import React from 'react';
import './Input.styles';

class Input extends React.Component {

  render() {
    console.log(this.props);
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

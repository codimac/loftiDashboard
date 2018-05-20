import React from 'react';
import Proptypes from 'prop-types';

import './Textarea.styles';

class Textarea extends React.Component {

  static propTypes = {
    name: Proptypes.string,
    className: Proptypes.string,
    onChange: Proptypes.func,
    placeholder: Proptypes.string,
    defaultValue: Proptypes.string,
    cols: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
    rows: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
  };

  render() {
    const { name, className, onChange, placeholder, defaultValue, cols, rows } = this.props;
    return (
      <div className={`${className} input__animated`}>
        <textarea name={name} cols={cols || 0} rows={rows || 0} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue}></textarea>
        <span className="input__animation"></span>
      </div>
    );
  }

}

export default Textarea;

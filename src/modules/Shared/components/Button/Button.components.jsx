import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {

  static propTypes = {
    className: Proptypes.string,
    disabled: Proptypes.bool,
    type: Proptypes.string,
    children: Proptypes.node.isRequired,
    onClick: Proptypes.func
  };

  render() {
    const { className, disabled, type, children, onClick } = this.props;
    return (
      <button className={className} disabled={disabled} type={type} onClick={onClick}><span className="wave wave-buttons"></span>{children}</button>
    );
  }

}

export default Button;

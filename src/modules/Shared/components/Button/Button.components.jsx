import React from 'react';
import Proptypes from 'prop-types';

class Button extends React.Component {

  static propTypes = {
    className: Proptypes.string,
    disabled: Proptypes.bool,
    type: Proptypes.string,
    children: Proptypes.node.isRequired
  };

  render() {
    const { className, disabled, type, children } = this.props;
    return (
      <button className={className} disabled={disabled} type={type}><span className="wave wave-buttons"></span>{children}</button>
    );
  }

}

export default Button;

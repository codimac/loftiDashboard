import React from 'react';

class Button extends React.Component {

  render() {
    console.log(this.props);
    const { className, disabled, type } = this.props;
    return (
      <button className={className} disabled={disabled} type={type}><span className="wave wave-buttons"></span>Connexion</button>
    );
  }

}

export default Button;

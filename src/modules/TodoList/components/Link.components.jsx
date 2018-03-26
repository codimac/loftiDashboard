import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {

  static propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  render() {
    const { active, onClick, children } = this.props;
    return (
      <button onClick={onClick} disabled={active}>
        {children}
      </button>
    );
  }

}

export default Link;

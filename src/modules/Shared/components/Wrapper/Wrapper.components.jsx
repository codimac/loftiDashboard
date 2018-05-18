import React from 'react';
import Proptypes from 'prop-types';

import './Wrapper.styles';

class Wrapper extends React.Component {

  static propTypes = {
    title: Proptypes.string.isRequired,
    children: Proptypes.node.isRequired,
    className: Proptypes.string
  };

  render() {
    const { title, children, className } = this.props;
    return (
      <section className={`module-wrapped padding-2 ${className || ''}`}>
        <div className="head">
          <h2>{ title }</h2>
        </div>
        <div className="content">
          { children }
        </div>
      </section>
    );
  }

}

export default Wrapper;

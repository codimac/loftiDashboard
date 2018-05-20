import React from 'react';
import Proptypes from 'prop-types';

import './Wrapper.styles';

class Wrapper extends React.Component {

  static propTypes = {
    title: Proptypes.string.isRequired,
    children: Proptypes.node.isRequired,
    className: Proptypes.string,
    onClose: Proptypes.func
  };

  render() {
    const { title, children, className, onClose } = this.props;
    return (
      <section className={`module-wrapped padding-2 ${className || ''}`}>
        <div className="head">
          <h2>{ title }</h2>
          {
            onClose &&
            <span onClick={onClose} className="close" role="button" tabIndex={0}>{'\u2716'}</span>
          }
        </div>
        <div className="content">
          { children }
        </div>
      </section>
    );
  }

}

export default Wrapper;

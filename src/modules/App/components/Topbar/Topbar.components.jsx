import React from 'react';

import Identity from '@Shared/components/Identity/Identity.components';
import './Topbar.styles';

class Topbar extends React.Component {

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div className="topbar flex justify-content-sb align-items-center">
        <div>
          la partie de gauche
        </div>
        <Identity />
      </div>
    );
  }

}

export default Topbar;

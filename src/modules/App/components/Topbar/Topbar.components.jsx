import React from 'react';

import Identity from '@App/containers/User.containers';

class Topbar extends React.Component {

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

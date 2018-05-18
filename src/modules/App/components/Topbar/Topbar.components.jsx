import React from 'react';

import Identity from '@App/containers/User.containers';

class Topbar extends React.Component {

  render() {
    return (
      <section className="topbar">
        <div>
          la partie de gauche
        </div>
        <Identity />
      </section>
    );
  }

}

export default Topbar;

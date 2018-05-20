import React from 'react';

import Identity from '@App/containers/User.containers';

class Topbar extends React.Component {

  render() {
    return (
      <section className="topbar">
        <div></div>
        <div>
          <Identity />
        </div>
      </section>
    );
  }

}

export default Topbar;

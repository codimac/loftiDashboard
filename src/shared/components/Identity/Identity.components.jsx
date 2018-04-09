import React from 'react';

import ProfilePicture from '@shared/components/ProfilePicture/ProfilePicture.components';
import './Identity.styles';

class Identity extends React.Component {

  render() {
    return (
      <div className="identity">
        <h4>firstname lastname</h4>
        <ProfilePicture />
      </div>
    );
  }

}

export default Identity;

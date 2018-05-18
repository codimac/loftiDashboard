import React from 'react';
import Proptypes from 'prop-types';

import ProfilePicture from '@Shared/components/ProfilePicture/ProfilePicture.components';
import { permissionsSvc } from '@services/permissions.services';
import './Identity.styles';

class Identity extends React.Component {

  static propTypes = {
    getUser: Proptypes.func.isRequired,
    firstname: Proptypes.string.isRequired,
    lastname: Proptypes.string.isRequired,
    picture: Proptypes.string.isRequired
  };

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { firstname, lastname, picture } = this.props;
    return (
      <div className="identity">
        <div>
          <h4 className="name">{firstname} {lastname}</h4>
          <h5 className="role">{permissionsSvc.getRole()}</h5>
        </div>
        <ProfilePicture picture={picture} />
      </div>
    );
  }

}

export default Identity;

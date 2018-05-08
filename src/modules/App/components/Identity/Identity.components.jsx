import React from 'react';
import PropTypes from 'prop-types';

import ProfilePicture from '@Shared/components/ProfilePicture/ProfilePicture.components';
import { permissionsSvc } from '@services/permissions.services';
import './Identity.styles';

class Identity extends React.Component {

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { firstname, lastname, picture } = this.props;
    return (
      <div className="identity">
        <div>
          <h4>{firstname} {lastname}</h4>
          <h5>{permissionsSvc.getRole()}</h5>
        </div>
        <ProfilePicture picture={picture} />
      </div>
    );
  }

}

export default Identity;

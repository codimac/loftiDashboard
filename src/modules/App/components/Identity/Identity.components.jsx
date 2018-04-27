import React from 'react';
import PropTypes from 'prop-types';

import ProfilePicture from '@Shared/components/ProfilePicture/ProfilePicture.components';
import './Identity.styles';

class Identity extends React.Component {

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { firstname, lastname } = this.props;
    return (
      <div className="identity">
        <h4>{ firstname } { lastname }</h4>
        <ProfilePicture />
      </div>
    );
  }

}

export default Identity;

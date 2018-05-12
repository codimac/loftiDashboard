import React from 'react';
import Proptypes from 'prop-types';

class PodiumStudients extends React.Component {

  componentDidMount() {
    this.props.getPromoPodiumAbsences();
  }

  render() {
    return (
      <div>
        le podium des meilleurs absents
      </div>
    );
  }
}

export default PodiumStudients;

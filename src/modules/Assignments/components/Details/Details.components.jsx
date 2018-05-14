import React from 'react';
import Proptypes from 'prop-types';

class Details extends React.Component {

  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.shape({
        assignmentId: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
    getAssignment: Proptypes.func.isRequired
  };

  componentDidMount() {
    this.props.getAssignment(+this.props.match.params.assignmentId);
  }

  render() {
    console.log(this.props);
    return (
      <h1>Details</h1>
    );
  }

}

export default Details;

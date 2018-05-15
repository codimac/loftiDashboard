import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    const { assignment: {assignment, grades} } = this.props;
    return (
      <React.Fragment>
        <h1>{assignment.name}</h1>
        <h2>{assignment.description}</h2>
        <h2>Coefficient: {assignment.coefficient}</h2>
        <Link to={`${this.props.match.params.assignmentId}/edit`}>Editer</Link>
      </React.Fragment>
    );
  }

}

export default Details;

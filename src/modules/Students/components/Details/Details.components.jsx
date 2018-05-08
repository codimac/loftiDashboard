import React from 'react';
import Proptypes from 'prop-types';

class Details extends React.Component {

  static propTypes = {
    getStudent: Proptypes.func.isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        username: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
    identity: Proptypes.shape({
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      username: Proptypes.string.isRequired
    }).isRequired,
    grades: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      ue: Proptypes.number.isRequired,
      coefficient: Proptypes.number.isRequired,
      value: Proptypes.number.isRequired
    })).isRequired
  };

  componentDidMount() {
    this.props.getStudent(this.props.match.params.username);
  }

  render() {
    console.log(this.props);
    const { identity, grades } = this.props;
    return (
      <React.Fragment>
        <h1>Détails d'un étudiant</h1>
        <h2>Etudiant : {identity.firstname} {identity.lastname}</h2>
        <div className="grades">
          <ul>
            {grades.map(grade => (
              <li key={grade.id}>{grade.value} - coeff = {grade.coefficient}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }

}

export default Details;

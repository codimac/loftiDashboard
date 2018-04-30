import React from 'react';
import Proptypes from 'prop-types';

class ListGrades extends React.Component {

  static propTypes = {
    getGradesList: Proptypes.func.isRequired,
    gradesList: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      value: Proptypes.number.isRequired
    })).isRequired
  };

  componentDidMount() {
    this.props.getGradesList();
  }

  render() {
    const { gradesList } = this.props;
    return (
      <React.Fragment>
        <h1>LES NOTES</h1>
        <ul>
          { gradesList.map(grade => (
            <li key={grade.id}>{grade.value}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

}

export default ListGrades;

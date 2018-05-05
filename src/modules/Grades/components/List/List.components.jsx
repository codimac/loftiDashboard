import React from 'react';
import Proptypes from 'prop-types';

import { parseFloat } from '@Shared/helpers/number.helpers';

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

  average = (grades) => {
    const average = grades.reduce((acc, grade) => acc + grade.value, 0) / grades.length;
    return parseFloat(average);
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
        <h4>Moyenne = { this.average(gradesList) }</h4>
      </React.Fragment>
    );
  }

}

export default ListGrades;

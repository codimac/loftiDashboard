import React from 'react';
import Proptypes from 'prop-types';

import { parseFloat } from '@helpers/number.helpers';

class List extends React.Component {

  static propTypes = {
    getGradesList: Proptypes.func.isRequired,
    grades: Proptypes.arrayOf(Proptypes.shape({
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
    const { grades } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>LES NOTES</h1>
        <ul>
          {grades.map(grade => (
            <li key={grade.id}>{grade.value}</li>
          ))}
        </ul>
        <h4>Moyenne = { this.average(grades) }</h4>
      </React.Fragment>
    );
  }

}

export default List;

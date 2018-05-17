import React from 'react';
import Proptypes from 'prop-types';

import { average } from '@helpers/array.helpers';

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


  render() {
    const { grades } = this.props;
    return (
      <React.Fragment>
        <h1>LES NOTES</h1>
        <ul>
          {grades.map(grade => (
            <li key={grade.id}>{grade.value}</li>
          ))}
        </ul>
        <h4>Moyenne = { average(grades, 'value') }</h4>
      </React.Fragment>
    );
  }

}

export default List;

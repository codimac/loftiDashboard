import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Details from '@Assignments/components/Details/Details.components';

import { getAssignmentsDetails } from '@Assignments/reducers/details.reducers';
import { getFilter } from '@Shared/reducers/filter.reducers';
import * as actions from '@Assignments/effects/details.effects';

const filterStudents = (assignment, filter) => assignment.assignment.tempGrades.filter(student => {
  const user = `${student.firstname} ${student.lastname}`;
  const filterTexTValue = filter.value.toLowerCase();

  return (user.toLowerCase().indexOf(filterTexTValue) !== -1 || !filterTexTValue)
    && (student.grades >= filter.grades.min && student.grades <= filter.grades.max)
    && (filter.showedTd ? student.td === filter.showedTd : true);
});

const getVisibleStudents = (assignment, filter) => {
  return {
    ...assignment,
    assignment: {
      ...assignment.assignment,
      grades: filterStudents(assignment, filter)
    }
  };
};

const mapStateToProps = state => getVisibleStudents(getAssignmentsDetails(state), getFilter(state));

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);

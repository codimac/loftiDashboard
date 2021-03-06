import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailsPromotion from '@Promos/components/Details/Details.components';

import { getPromotion } from '@Promos/reducers/details.reducers';
import { getFilter } from '@Shared/reducers/filter.reducers';
import * as actions from '@Promos/effects/details.effects';

const filterStudent = (students, val, td) => students.tempPromotion.filter(student => {
  const user = `${student.firstname} ${student.lastname}`;
  return (user.toLowerCase().indexOf(val) !== -1 || !val) && (td ? student.td === td : true);
});

const getVisibleStudents = (students, filter) => {
  return {
    ...students,
    promotion: filterStudent(students, filter.value.toLowerCase(), filter.showedTd)
  };
};

const mapStateToProps = state => getVisibleStudents(getPromotion(state), getFilter(state));

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPromotion);


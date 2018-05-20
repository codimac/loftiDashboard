import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import DetailsStudent from '@Students/components/Details/Details.components';

import { getStudent } from '@Students/reducers/details.reducers';
import { getSemestersList } from '@Semesters/reducers/list.reducers';
import * as actions from '@Students/effects/details.effects';

const mapStateToProps = state => ({
  grades: getStudent(state).grades,
  tempGrades: getStudent(state).grades,
  identity: getStudent(state).identity,
  semesters: getSemestersList(state).semesters
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsStudent);

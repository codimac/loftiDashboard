import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudentDetails from '@Absences/components/StudentDetails/StudentDetails.components';

import { getAbsencesList } from '@Absences/reducers/studentDetails.reducers';

import * as actions from '@Absences/effects/studentDetails.effects';

const mapStateToProps = state => ({
  absences: getAbsencesList(state).absencesList
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);

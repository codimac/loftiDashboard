import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Details from '@Absences/components/Details/Details.components';

import { getAbsencesList } from '@Absences/reducers/studentDetails.reducers';

import * as actions from '@Absences/effects/studentDetails.effects';

const mapStateToProps = state => getAbsencesList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);

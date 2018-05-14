import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodiumStudents from '@Absences/components/PodiumStudents/PodiumStudents.components';

import { getPromoPodiumAbsences } from '@Absences/reducers/promoAbsencesPodium.reducers';

import * as actions from '@Absences/effects/promoAbsencesPodium.effects';

const mapStateToProps = state => (getPromoPodiumAbsences(state));

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PodiumStudents);

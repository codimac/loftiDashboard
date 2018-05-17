import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WeekGraph from '@Absences/components/WeekGraph/WeekGraph.components';

import { getAbsencesWeekGraphList } from '@Absences/reducers/weekGraph.reducers';

import * as actions from '@Absences/effects/weekGraph.effects';

const mapStateToProps = state => (getAbsencesWeekGraphList(state));

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WeekGraph);

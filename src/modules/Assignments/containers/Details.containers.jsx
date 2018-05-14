import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Details from '@Assignments/components/Details/Details.components';

import { getAssignmentsDetails } from '@Assignments/reducers/details.reducers';
import * as actions from '@Assignments/effects/details.effects';

const mapStateToProps = state => getAssignmentsDetails(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@Assignments/components/List/List.components';

import { getAssignmentsList } from '@Assignments/reducers/list.reducers';
import * as actions from '@Assignments/effects/list.effects';

const mapStateToProps = state => getAssignmentsList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@Semesters/components/List/List.components';

import { getSemestersList } from '@Semesters/reducers/list.reducers';
import * as actions from '@Semesters/effects/list.effects';

const mapStateToProps = state => getSemestersList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

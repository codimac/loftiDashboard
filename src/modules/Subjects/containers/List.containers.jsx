import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@Subjects/components/List/List.components';

import { getSubjectsList } from '@Subjects/reducers/list.reducers';
import * as actions from '@Subjects/effects/list.effects';

const mapStateToProps = state => getSubjectsList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListUes from '@Courses/components/Ues/ListUes.components';

import { getUesList } from '@Courses/reducers/uesList.reducers';
import * as actions from '@Courses/effects/uesList.effects';

const mapStateToProps = state => getUesList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListUes);

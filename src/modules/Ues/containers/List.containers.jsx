import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '@Ues/components/List/List.components';

import { getUesList } from '@Ues/reducers/list.reducers';
import * as actions from '@Ues/effects/list.effects';

const mapStateToProps = state => getUesList(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

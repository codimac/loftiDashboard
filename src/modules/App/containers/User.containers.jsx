import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Topbar from '@App/components/Topbar/Topbar.components';

import { getUser } from '@App/reducers/user.reducers';
import * as actions from '@App/effects/user.effects';

const mapStateToProps = state => getUser(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);

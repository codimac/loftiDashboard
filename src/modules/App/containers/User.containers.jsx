import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Identity from '@App/components/Identity/Identity.components';

import { getUser } from '@App/reducers/user.reducers';
import * as actions from '@App/effects/user.effects';

const mapStateToProps = state => getUser(state);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Identity);

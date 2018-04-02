import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login.components';

import { getAuth } from '../reducers/auth.reducers';
import { signin } from '../effects/auth.effects';

const mapStateToProps = state => getAuth(state);

const mapDispatchToProps = dispatch => ({
  signin: (username, password) => dispatch(signin(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

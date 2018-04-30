import React from 'react';
import PropTypes from 'prop-types';

import { authSvc } from '@services/auth.services';
import { history } from '@Shared/helpers/history.helpers';
import './Login.styles';

class Login extends React.Component {

  static propTypes = {
    signin: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  componentWillMount() {
    if (authSvc.isAuth()) {
      history.push('/');
    }
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({submitted: true});

    const { username, password } = this.state;
    if (username && password) {
      this.props.signin(username, password);
    }
  }

  handleChange = ev => {
    this.setState({[ev.target.name]: ev.target.value});
  }

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="flex flex-column justify-content-center align-items-center wrapper login">
        <h1 className="mb-3">Imacboard</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="mb-2" type="text" placeholder="Identifiant" name="username" value={username} onChange={this.handleChange} />
          <input className="mb-2" type="password" placeholder="Mot de passe" name="password" value={password} onChange={this.handleChange} />
          <button className="button" type="submit">Connexion</button>
        </form>
      </div>
    );
  }

}

export default Login;

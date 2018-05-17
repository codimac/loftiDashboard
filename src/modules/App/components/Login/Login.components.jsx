import React from 'react';
import Proptypes from 'prop-types';

import Input from '@Shared/components/Input/Input.components';
import { authSvc } from '@services/auth.services';
import { history } from '@helpers/history.helpers';
import './Login.styles';

class Login extends React.Component {

  static propTypes = {
    signin: Proptypes.func.isRequired
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
      <div className="wrapper flex justify-content-center align-items-center bg-black">
        <section className="login padding-3 bg-white">
          <h1 className="mb-3">Imacboard</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <Input className="full-size mb-2" type="text" placeholder="Identifiant" name="username" value={username} onChange={this.handleChange} />
            <Input className="full-size mb-2" type="password" placeholder="Mot de passe" name="password" value={password} onChange={this.handleChange} />
            <button className="button button__white" type="submit">Connexion</button>
          </form>
        </section>
      </div>
    );
  }

}

export default Login;

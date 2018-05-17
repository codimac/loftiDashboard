import React from 'react';
import PropTypes from 'prop-types';
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
      <div className="page">
        <div className="form-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <label htmlFor="username" className="label">
              <h5 className="label-title">Username</h5>
              <input id="username" type="text" placeholder="username" name="username" className="input" value={username} onChange={this.handleChange} />
            </label>
            <label htmlFor="password" className="label">
              <h5 className="label-title">Mot de passe</h5>
              <input id="password" type="password" placeholder="Password" name="password" className="input" value={password} onChange={this.handleChange} />
            </label>
            <button type="submit">Connexion</button>
          </form>
        </div>
      </div>
    );
  }

}

export default Login;

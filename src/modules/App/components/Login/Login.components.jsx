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
      <div className="flex flex-column content-align-center item-align-center wrapper login">
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" name="username" value={username} onChange={this.handleChange} />
          <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
          <button type="submit">Connexion</button>
        </form>
      </div>
    );
  }

}

export default Login;

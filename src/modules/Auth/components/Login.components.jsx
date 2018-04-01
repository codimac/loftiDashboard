import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {

  static propTypes = {
    signin: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      submitted: false
    };
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({submitted: true});

    const { email, password } = this.state;
    // if (email && password) {
    this.props.signin(email, password);
    // }
  }

  handleChange = ev => {
    this.setState({[ev.target.name]: ev.target.value});
  }

  render() {
    const { email, password, submitted } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
          <input type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
          <button type="submit">Connexion</button>
        </form>
      </div>
    );
  }

}

export default Login;

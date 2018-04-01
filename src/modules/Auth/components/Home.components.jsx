import React from 'react';
import Http from '@shared/Http';
import { history } from '@shared/helpers/history.helpers';
import { storageSvc } from '@services/storage.services';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    Http.get('/users/me')
      .then(res => this.setState({name: res.data.email}))
      .catch(err => console.error(err));
  }

  disconnect = ev => {
    storageSvc.removeItem('token');
    history.push('/');
  }

  render() {
    return (
      <div>
        <h4>Hello {this.state.name}</h4>
        <button onClick={this.disconnect}>Deco</button>
      </div>
    );
  }

}

export default Home;

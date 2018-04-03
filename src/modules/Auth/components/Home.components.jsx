import React from 'react';
import Http from '@shared/Http';
import { history } from '@shared/helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { requestSvc } from '@services/request.services';
import { permissionsSvc } from '@services/permissions.services';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    Http.get('/users/me', requestSvc.generateOptions())
      .then(res => this.setState({username: res.data.username}))
      .catch(err => console.error(err));

    // console.log(permissionsSvc.is('admin'));
  }

  disconnect = ev => {
    storageSvc.removeItem('token');
    history.push('/');
  }

  render() {
    return (
      <div>
        <h4>Hello {this.state.username}</h4>
        <button onClick={this.disconnect}>Deco</button>
      </div>
    );
  }

}

export default Home;

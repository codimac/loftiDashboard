import React from 'react';
import Http from '@shared/Http';
import { history } from '@shared/helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { requestSvc } from '@services/request.services';
import { permissionsSvc } from '@services/permissions.services';

class Home extends React.Component {

  disconnect = ev => {
    storageSvc.removeItem('token');
    history.push('/');
  }

  render() {
    return (
      <div>
        <h4>Hello</h4>
        <button onClick={this.disconnect}>Deco</button>
      </div>
    );
  }

}

export default Home;

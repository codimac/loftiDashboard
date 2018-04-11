import React from 'react';
import Http from '@Shared/Http';
import { history } from '@Shared/helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { requestSvc } from '@services/request.services';
import { permissionsSvc } from '@services/permissions.services';

import Sidebar from '@App/components/Sidebar//Sidebar.components';
import Topbar from '@App/components/Topbar/Topbar.components';
import Main from '@App/components/Main/Main.components';
import './Home.styles';

class Home extends React.Component {

  disconnect = ev => {
    storageSvc.removeItem('token');
    history.push('/');
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Topbar />
        <div className="main-wrapper">
          <button onClick={this.disconnect}>Deco</button>
          <Main />
        </div>
      </React.Fragment>
    );
  }

}

export default Home;

import React from 'react';
import Http from '@Shared/Http';
import { requestSvc } from '@services/request.services';
import { permissionsSvc } from '@services/permissions.services';

import Sidebar from '@App/containers/Sidebar.containers';
import Topbar from '@App/components/Topbar/Topbar.components';
import Main from '@App/components/Main/Main.components';
import './Home.styles';

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Topbar />
        <div className="main-wrapper">
          <Main />
        </div>
      </React.Fragment>
    );
  }

}

export default Home;

import React from 'react';
import Http from '@shared/Http';
import { history } from '@shared/helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { requestSvc } from '@services/request.services';
import { permissionsSvc } from '@services/permissions.services';

import Sidebar from '@App/components/Sidebar//Sidebar.components';
import ListUe from '@modules/Courses/components//ListUe.components';

class Home extends React.Component {

  disconnect = ev => {
    storageSvc.removeItem('token');
    history.push('/');
  }

  render() {
    return (
      <React.Fragment>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <ListUe />
      </React.Fragment>
    );
  }

}

export default Home;

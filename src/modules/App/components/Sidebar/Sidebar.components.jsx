import React from 'react';
import ListPromos from '@Promos/containers/List.containers';

import { permissionsSvc } from '@services/permissions.services';
import { history } from '@Shared/helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { Link } from 'react-router-dom';

import './Sidebar.styles';

class Sidebar extends React.Component {

  disconnect = ev => {
    storageSvc.removeItem('token');
    history.push('/');
  }

  renderAdmin() {
    return (
      <React.Fragment>
        <ListPromos />
        <li><Link className="link" to='/courses'> Enseignements </Link> </li>
      </React.Fragment>
    );
  }

  renderStudent() {
    return (
      <React.Fragment>
        <li>Student</li>
        <li>Un autre lien Etudiant bien</li>
      </React.Fragment>
    );
  }

  render() {
    return (
      <nav className="flex flex-column justify-content-sb align-items-center sidebar">
        <ul>
          { permissionsSvc.isAdmin() &&
            this.renderAdmin()
          }
          { permissionsSvc.isStudent() &&
            this.renderStudent()
          }
        </ul>
        <button onClick={this.disconnect}>Deco</button>
      </nav>
    );
  }

}

export default Sidebar;

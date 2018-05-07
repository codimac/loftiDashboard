import React from 'react';
import ListPromos from '@Promos/containers/List.containers';

import { permissionsSvc } from '@services/permissions.services';
import { history } from '@helpers/history.helpers';
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
        <li><Link className="link" to='/promotions'>Promotions</Link></li>
        <ListPromos sidebar />
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
        { permissionsSvc.isAdmin() &&
          this.renderAdmin()
        }
        { permissionsSvc.isStudent() &&
          this.renderStudent()
        }
        <button onClick={this.disconnect}>Deco</button>
      </nav>
    );
  }

}

export default Sidebar;

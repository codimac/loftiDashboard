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
        <div className="sidebar-section">
          <h2><Link className="link link__sidebar__title" to='/promotions'>Promotions</Link></h2>
          <ListPromos sidebar={true} />
        </div>
        <div className="sidebar-section">
          <h2><Link className="link link__sidebar__title" to='/subjects'>Enseignements</Link></h2>
        </div>
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
        <div>
          { permissionsSvc.isAdmin() &&
            this.renderAdmin()
          }
          { permissionsSvc.isStudent() &&
            this.renderStudent()
          }
        </div>
        <div>
          <button className="button button__white" onClick={this.disconnect}>Deco</button>
        </div>
      </nav>
    );
  }

}

export default Sidebar;

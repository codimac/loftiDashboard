import React from 'react';
import ListPromos from '@Promos/containers/List.containers';

import { permissionsSvc } from '@services/permissions.services';
import { Link } from 'react-router-dom';

import './Sidebar.styles';

class Sidebar extends React.Component {

  renderAdmin() {
    return (
      <React.Fragment>
        <ListPromos />
        <li><Link to='/courses'> Enseignements </Link> </li>
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
      <nav className="flex justify-content-center sidebar">
        <ul>
          { permissionsSvc.isAdmin() &&
            this.renderAdmin()
          }
          { permissionsSvc.isStudent() &&
            this.renderStudent()
          }
        </ul>
      </nav>
    );
  }

}

export default Sidebar;

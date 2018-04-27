import React from 'react';

import { permissionsSvc } from '@services/permissions.services';
import './Sidebar.styles';

class Sidebar extends React.Component {

  renderAdmin() {
    return (
      <React.Fragment>
        <li>Admin</li>
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
          <li>Test 1</li>
          <li>Test 2</li>
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

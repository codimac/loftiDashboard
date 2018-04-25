import React from 'react';

import { permissionsSvc } from '@services/permissions.services';
import './Sidebar.styles';

class Sidebar extends React.Component {

  render() {
    return (
      <nav className="flex justify-content-center sidebar">
        <ul>
          <li>Test 1</li>
          <li>Test 2</li>
          { permissionsSvc.isAdmin() &&
          <li>Admin</li>
          }
          { permissionsSvc.isStudent() &&
          <li>Etudiant</li>
          }
        </ul>
      </nav>
    );
  }

}

export default Sidebar;

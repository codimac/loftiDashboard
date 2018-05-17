import React from 'react';
import { Link } from 'react-router-dom';

import ListPromos from '@Promos/containers/List.containers';

import { permissionsSvc } from '@services/permissions.services';
import { history } from '@helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { getPromotion } from '@Promos/reducers/details.reducers';
import store from '@App/App.store';

import './Sidebar.styles';

class Sidebar extends React.Component {

  constructor() {
    super();
    this.state = {
      promotionId: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.promotionId !== nextProps.promotionId) {
      this.setState({promotionId: nextProps.promotionId});
    }
  }

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
          {
            this.state.promotionId !== null &&
              <React.Fragment>
                <h2><Link to={`/promotions/${this.state.promotionId}/assignments`}>Lister les devoirs</Link></h2>
                <h2><Link to={`/promotions/${this.state.promotionId}/assignments/add`}>Ajouter un devoir</Link></h2>
                <h2><Link to={`/promotions/${this.state.promotionId}/absences`}>Consulter les absences</Link></h2>
              </React.Fragment>
          }
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

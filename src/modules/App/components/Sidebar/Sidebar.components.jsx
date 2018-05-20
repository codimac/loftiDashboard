import React from 'react';
import Proptypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import ListPromos from '@Promos/containers/List.containers';

import { permissionsSvc } from '@services/permissions.services';
import { history } from '@helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { getPromotion } from '@Promos/reducers/details.reducers';
import store from '@App/App.store';

class Sidebar extends React.Component {

  static propTypes = {
    promotionId: Proptypes.number
  };

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
          <h2 className="sidebar-section-title"><Link className="link link__white link__sidebar__title" to='/promotions'>Promotions</Link></h2>
          <ListPromos sidebar={true} />
        </div>
        {
          this.state.promotionId !== null &&
          <React.Fragment>
            <div className="sidebar-section">
              <ul>
                <li><NavLink exact className="link link__white link__sidebar  " activeClassName="active" to={`/promotions/${this.state.promotionId}/subjects`}>Lister les cours</NavLink></li>
              </ul>
            </div>
            <div className="sidebar-section">
              <ul>
                <li><NavLink exact className="link link__white link__sidebar  " activeClassName="active" to={`/promotions/${this.state.promotionId}/assignments`}>Lister les devoirs</NavLink></li>
                <li><NavLink exact className="link link__white link__sidebar" activeClassName="active" to={`/promotions/${this.state.promotionId}/assignments/add`}>Ajouter un devoir</NavLink></li>
              </ul>
            </div>
            <div className="sidebar-section">
              <ul>
                <li><NavLink exact className="link link__white link__sidebar" activeClassName="active" to={`/promotions/${this.state.promotionId}/absences`}>Consulter les absences</NavLink></li>
              </ul>
            </div>
          </React.Fragment>
        }
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
      <nav className="sidebar">
        <div>
          { permissionsSvc.isAdmin() &&
            this.renderAdmin()
          }
          { permissionsSvc.isStudent() &&
            this.renderStudent()
          }
        </div>
        <div>
          <div className="sidebar-section disconnect">
            <ul>
              <li className="link link__white link__sidebar link__disconnect" onClick={this.disconnect}>Déconnexion</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Sidebar;

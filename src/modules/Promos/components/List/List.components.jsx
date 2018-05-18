import React from 'react';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class List extends React.Component {

  static propTypes = {
    getPromotionsList: Proptypes.func.isRequired,
    promotions: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired
    })).isRequired,
    sidebar: Proptypes.bool
  };

  componentDidMount() {
    this.props.getPromotionsList();
  }

  getCurrentPromotions = promotions => promotions.slice(0, 3);

  renderSidebar = promotions => {
    const currentPromotions = this.getCurrentPromotions(promotions);
    return (
      <React.Fragment>
        <ul>
          { currentPromotions.map(promo => (
            <li key={promo.id}>
              <NavLink className="link link__white link__promotion" activeClassName="active" to={`/promotions/${promo.label}`}>{promo.label}</NavLink>
            </li>
          )) }
        </ul>
      </React.Fragment>
    );
  }

  renderList = promotions => {
    return (
      <React.Fragment>
        <h3>Toutes les promos</h3>
        <ul>
          { promotions.map(promo => (
            <li key={promo.id}><NavLink className="link" to={`/promotions/${promo.label}`}>{promo.label}</NavLink></li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  render() {
    const { sidebar, promotions } = this.props;
    return (
      <React.Fragment>
        { sidebar
          ? this.renderSidebar(promotions)
          : this.renderList(promotions)
        }
      </React.Fragment>
    );
  }

}

export default List;

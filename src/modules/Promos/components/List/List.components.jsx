import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class List extends React.Component {

  static propTypes = {
    getPromotionsList: Proptypes.func.isRequired,
    promotionsList: Proptypes.arrayOf(Proptypes.shape({
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
            <li key={promo.id}><Link className="link link__sidebar" to={`/promotions/${promo.label}`}>{promo.label}</Link></li>
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
            <li key={promo.id}><Link className="link link__black" to={`/promotions/${promo.label}`}>{promo.label}</Link></li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  render() {
    const { sidebar, promotionsList } = this.props;
    return (
      <React.Fragment>
        { sidebar
          ? this.renderSidebar(promotionsList)
          : this.renderList(promotionsList)
        }
      </React.Fragment>
    );
  }

}

export default List;

import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListPromotions extends React.Component {

  static propTypes = {
    getPromotionsList: Proptypes.func.isRequired,
    promotionsList: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired
    })).isRequired
  };

  componentDidMount() {
    this.props.getPromotionsList();
  }

  getCurrentPromotions = (promotions) => {
    return promotions.slice(0, 3);
  }

  render() {
    const currentPromotions = this.getCurrentPromotions(this.props.promotionsList);
    return (
      <React.Fragment>
        <h1>Promotions</h1>
        <ul>
          { currentPromotions.map(promo => (
            <li key={promo.id}><Link className="link" to={`/promotions/${promo.id}`}>{promo.label}</Link></li>
          )) }
        </ul>
      </React.Fragment>
    );
  }

}

export default ListPromotions;

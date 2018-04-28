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

  render() {
    const { promotionsList } = this.props;
    return (
      <React.Fragment>
        <h1>Promotions</h1>
        <ul>
          { promotionsList.map(promo => (
            <li key={promo.id}><Link to={`/promos/${promo.id}`}>{promo.label}</Link></li>
          )) }
        </ul>
      </React.Fragment>
    );
  }

}

export default ListPromotions;

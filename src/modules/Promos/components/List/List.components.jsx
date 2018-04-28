import React from 'react';
import Proptypes from 'prop-types';

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
            <li key={promo.id}>{promo.label}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

}

export default ListPromotions;

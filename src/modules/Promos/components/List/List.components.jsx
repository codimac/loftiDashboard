import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListPromotions extends React.Component {

  static propTypes = {
    getPromotionsList: Proptypes.func.isRequired,
    promotionsList: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired
    })).isRequired,
    sidebar: Proptypes.bool.isRequired
  };

  componentDidMount() {
    this.props.getPromotionsList();
  }

  getCurrentPromotions = (promotions) => {
    return promotions.slice(0, 3);
  }

  renderSidebar() {
    const currentPromotions = this.getCurrentPromotions(this.props.promotionsList);
    return (
      <React.Fragment>
        <ul>
          { currentPromotions.map(promo => (
            <li key={promo.id}><Link className="link" to={`/promotions/${promo.id}`}>{promo.label}</Link></li>
          )) }
        </ul>
      </React.Fragment>
    );
  }

  renderList() {
    return (
      <h1>Liste</h1>
    );
  }

  render() {
    const { sidebar, promotionsList } = this.props;
    return (
      <React.Fragment>
        { sidebar
          ? this.renderSidebar()
          : this.renderList()
        }
      </React.Fragment>
    );
  }

}

export default ListPromotions;

import React from 'react';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Wrapper from '@Shared/components/Wrapper/Wrapper.components';

import './List.styles';

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
        <div className="flex promotion-list">
          <Wrapper title="Liste des promotions" className="promotion__list">
            <ul className="link-container">
              { promotions.map(promo => (
                <li key={promo.id}><NavLink className="link padding-2" to={`/promotions/${promo.label}`}>{promo.label}</NavLink></li>
              ))}
            </ul>
          </Wrapper>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { sidebar, promotions } = this.props;
    return (
      <React.Fragment>
        <h1 className="page-title">Les promotions</h1>
        { sidebar
          ? this.renderSidebar(promotions)
          : this.renderList(promotions)
        }
      </React.Fragment>
    );
  }

}

export default List;

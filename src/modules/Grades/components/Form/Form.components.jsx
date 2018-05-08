import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '@App/App.store';

import { getPromotionsList } from '@Promos/reducers/list.reducers';
import * as effects from '@Promos/effects/list.effects';

import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {

  // getAllPromotions
  // select a prom and get All Pr
  // ajout devoir (nom, coeff)
  // ajout notes

  static propTypes = {
    promotionsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })).isRequired
  };

  change = ev => {
    console.log(ev.target.value);
  }

  parsedPromotions = promotions => {
    return promotions.map(promo => {
      return {
        ...promo,
        value: promo.label
      };
    });
  }

  render() {
    const { promotionsList } = this.props;
    const items = this.parsedPromotions(promotionsList);

    return (
      <React.Fragment>
        <h1>Form</h1>
        <SelectInput items={items} placeholder="Sélectionner une promotion" onChange={this.change} />
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => getPromotionsList(state);

export default connect(mapStateToProps)(Form);

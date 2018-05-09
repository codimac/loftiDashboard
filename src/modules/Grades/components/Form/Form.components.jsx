import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '@App/App.store';

import { getPromotionsList } from '@Promos/reducers/list.reducers';
import { getPromotion as getPromotionDetails } from '@Promos/reducers/details.reducers';

import { getPromotion } from '@Promos/effects/details.effects';

import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {

  static propTypes = {
    promotionsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string
    })).isRequired
  };

  constructor() {
    super();
    this.state = {
      selectedPromo: null,
      selectedUE: null,
      selectedCourse: null
    };
  }

  selectPromo = ev => {
    store.dispatch(getPromotion(ev.target.value));
    this.setState({selectedPromo: ev.target.value});
  }

  selectUE = ev => {
    this.setState({selectedUE: ev.value.target});
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
    const { promotionsList, promotionsDetails } = this.props;
    const items = this.parsedPromotions(promotionsList);

    return (
      <React.Fragment>
        <h1>Form</h1>

        {/*         <h2>Ajouter un devoir</h2>
        <form>
          <input type="text" placeholder="Nom du devoir" />
          <input type="number" placeholder="coeff" min={1} />
          <button>Ajouter</button>
        </form> */}

        <SelectInput items={items} placeholder="Sélectionner une promotion" onChange={this.selectPromo} />
        {
          this.state.selectedPromo &&
            <div>
              <SelectInput items={items} placeholder="Sélectionner une UE" onChange={this.selectUE} />
            </div>
            /* <div>
              <h2>La promotion sélectionnée est {this.state.selectedPromo}</h2>

              <div className="tab">
                <table>
                  <thead>
                    <tr>
                      <th>Elève</th>
                      <th>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    { promotionsDetails.map(student => (
                      <tr key={student.id}>
                        <td> {student.firstname } { student.lastname }</td>
                        <td><input type="number" placeholder={10} /></td>
                      </tr>
                    )) }
                  </tbody>
                </table>
              </div>

            </div> */
         }

      </React.Fragment>
    );
  }

}

const mapStateToProps = state => ({
  promotionsList: getPromotionsList(state).promotionsList,
  promotionsDetails: getPromotionDetails(state).promotion
});

export default connect(mapStateToProps)(Form);

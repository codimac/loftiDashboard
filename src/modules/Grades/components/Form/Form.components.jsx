import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '@App/App.store';

import { getPromotionsList } from '@Promos/reducers/list.reducers';
import { getPromotion } from '@Promos/reducers/details.reducers';

import * as promotionsDetailsEffects from '@Promos/effects/details.effects';

import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {

  static propTypes = {
    year: PropTypes.number.isRequired,
    promotion: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    })).isRequired
  };

  constructor() {
    super();
    this.state = {
      selectedSemester: null,
      selectedUE: null,
      selectedCourse: null
    };
  }

  componentDidMount() {
    // à voir si le if est pertinent
    if (this.props.match.params.id !== getPromotion(store.getState()).year) {
      store.dispatch(promotionsDetailsEffects.getPromotion(this.props.match.params.id));
    }
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
    const { year, promotion } = this.props;

    return (
      <React.Fragment>
        <h1>Form</h1>
        <h2>La promo sélectionnée est { year }</h2>

        {/*         <h2>Ajouter un devoir</h2>
        <form>
          <input type="text" placeholder="Nom du devoir" />
          <input type="number" placeholder="coeff" min={1} />
          <button>Ajouter</button>
        </form> */}

        {
          this.state.selectedPromo &&
            <div>
              {/* <SelectInput items={items} placeholder="Sélectionner une UE" onChange={this.selectUE} /> */}
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
  promotion: getPromotion(state).promotion,
  year: getPromotion(state).year
});

export default connect(mapStateToProps)(Form);

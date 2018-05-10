import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import store from '@App/App.store';

import { getPromotionsList } from '@Promos/reducers/list.reducers';
import { getPromotion } from '@Promos/reducers/details.reducers';
import { getSemestersList } from '@Semesters/reducers/list.reducers';

import * as promotionsDetailsEffects from '@Promos/effects/details.effects';
import * as semestersListEffects from '@Semesters/effects/list.effects';

import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

class Form extends React.Component {

  static propTypes = {
    year: Proptypes.number.isRequired,
    promotion: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      username: Proptypes.string.isRequired
    })).isRequired,
    semesters: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired
    })).isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        id: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
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
    store.dispatch(semestersListEffects.getSemestersList());
  }

  selectUE = ev => {
    this.setState({selectedUE: ev.target.value});
  }

  selectSemester = ev => {
    this.setState({selectedSemester: +ev.target.value});
  }

  parsedPromotions = promotions => {
    return promotions.map(promo => {
      return {
        ...promo,
        value: promo.label
      };
    });
  }

  parsedSemester = semesters => {
    return semesters.map(semester => ({
      ...semester,
      value: semester.id
    }));
  }

  render() {
    const { year, promotion, semesters } = this.props;

    return (
      <React.Fragment>
        <h1>Form</h1>
        <h2>La promo sélectionnée est { year }</h2>

        <SelectInput items={this.parsedSemester(semesters)} placeholder='Sélectionner un semestre' onChange={this.selectSemester} />

        {/*         <h2>Ajouter un devoir</h2>
        <form>
          <input type="text" placeholder="Nom du devoir" />
          <input type="number" placeholder="coeff" min={1} />
          <button>Ajouter</button>
        </form> */}

        {
          this.state.selectedSemester &&
            <div>
              coucou
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
  year: getPromotion(state).year,
  semesters: getSemestersList(state).semestersList
});

export default connect(mapStateToProps)(Form);

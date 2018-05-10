import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import store from '@App/App.store';

import { getPromotionsList } from '@Promos/reducers/list.reducers';
import { getPromotion } from '@Promos/reducers/details.reducers';
import { getSemestersList } from '@Semesters/reducers/list.reducers';
import { getUesList } from '@Ues/reducers/list.reducers';

import * as promotionsDetailsEffects from '@Promos/effects/details.effects';
import * as semestersListEffects from '@Semesters/effects/list.effects';
import * as uesListEffects from '@Ues/effects/list.effects';

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
    store.dispatch(semestersListEffects.getSemesterForPromo(this.props.match.params.id));
  }

  selectUE = ev => {
    this.setState({selectedUE: ev.target.value});
  }

  selectSemester = ev => {
    this.setState({selectedSemester: +ev.target.value});
    store.dispatch(uesListEffects.getUesListFromSemester(this.state.selectedSemester));
  }

  parsedPromotions = promotions => {
    return promotions.map(promo => {
      return {
        ...promo,
        value: promo.label
      };
    });
  }

  parsedSemesters = semesters => {
    return semesters.map(semester => ({
      ...semester,
      value: semester.id
    }));
  }

  parsedUes = ues => {

  }

  render() {
    const { year, promotion, semesters } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>Form</h1>
        <h2>La promo sélectionnée est { year }</h2>

        <SelectInput items={this.parsedSemesters(semesters)} placeholder='Sélectionner un semestre' onChange={this.selectSemester} />

        {/* {
          this.state.selectedSemester &&
            <SelectInput items={this.parsedUes(ues)} placeholder='Sélectionner une UE' onChange={this.selectUE} />
         } */}

      </React.Fragment>
    );
  }

}

const mapStateToProps = state => ({
  promotion: getPromotion(state).promotion,
  year: getPromotion(state).year,
  semesters: getSemestersList(state).semesters,
  ues: getUesList(state).uesList
});

export default connect(mapStateToProps)(Form);

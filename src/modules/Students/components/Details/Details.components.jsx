import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import store from '@App/App.store';
import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import SelectInput from '@Shared/components/SelectInput/SelectInput.components';

import { getPromotionId } from '@Promos/reducers/details.reducers';
import * as semestersListEffects from '@Semesters/effects/list.effects';
import * as promotionsDetailsEffects from '@Promos/effects/details.effects';

import { average, averageWithCoeff } from '@helpers/array.helpers';

import './Details.styles';

class Details extends React.Component {

  static propTypes = {
    getStudent: Proptypes.func.isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        username: Proptypes.string.isRequired,
        promotionId: Proptypes.string.isRequired
      }).isRequired
    }).isRequired,
    identity: Proptypes.shape({
      firstname: Proptypes.string.isRequired,
      lastname: Proptypes.string.isRequired,
      username: Proptypes.string.isRequired,
      td: Proptypes.number.isRequired
    }),
    // grades: Proptypes.arrayOf(Proptypes.shape({
    //   id: Proptypes.number.isRequired,
    //   ue: Proptypes.number.isRequired,
    //   coefficient: Proptypes.number.isRequired,
    //   value: Proptypes.number.isRequired
    // })).isRequired
  };

  constructor() {
    super();
    this.state = {
      gradesForSemester: []
    };
  }

  componentDidMount() {
    store.dispatch(semestersListEffects.getSemestersForPromo(+this.props.match.params.promotionId));
    this.props.getStudent(this.props.match.params.username);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.promotionId !== getPromotionId(store.getState())) {
      store.dispatch(promotionsDetailsEffects.getPromotion(+nextProps.match.params.promotionId));
    }
  }

  parsedItems = items => {
    return items.map(item => ({
      ...item,
      value: item.id,
    }));
  }

  filterGrades = ev => {
    this.setState({
      gradesForSemester: this.props.tempGrades.filter(semester => semester.semesterId === +ev.target.value)[0]
    }, () => console.log(this.state));
  }

  render() {
    const { identity, grades, semesters } = this.props;
    return (
      <React.Fragment>
        <h1 className="page-title">Détails d'un étudiant : </h1>
        <div className="flex justify-content-sb student-details">
          <Wrapper title="Identité" className="student-details__identity">
            <ul className="details-container">
              <li className="details-li"><span>Prénom : </span>{identity.firstname}</li>
              <li className="details-li"><span>Nom : </span>{identity.lastname}</li>
              <li className="details-li"><span>Identifiant : </span>{identity.username}</li>
              <li className="details-li"><span>Promotion : </span>{identity.promotion}</li>
              <li className="details-li"><span>TD{identity.td}</span></li>
            </ul>
          </Wrapper>

          <Wrapper title="Les notes" className="student-details__assignments">
            <SelectInput items={this.parsedItems(semesters)} placeholder="Sélectionner un semestre" selected={0} onChange={this.filterGrades} />
            {
              this.state.gradesForSemester.ues &&
                <div className="assignments-container inline mt-2">
                  {
                    this.state.gradesForSemester.ues.map(ue => (
                      <section className="ue-section" key={ue.id}>
                        <h1 className="ue-title mb-3">{ue.name}</h1>
                        {
                          ue.subjects.map(subject => (
                            <article className="subject-article pl-3" key={subject.id}>
                              <h2 className="subject-title mb-2">{subject.name} - {averageWithCoeff(subject.assignments, 'grade')}</h2>
                              {
                                subject.assignments.map(assignment => (
                                  <ul key={assignment.id} className="assignment-list">
                                    <li className="flex flex-column">
                                      <Link to={`/promotions/${this.props.match.params.promotionId}/assignments/${assignment.id}`} className="link assignment">
                                        <span className="assignment-name">{assignment.name} : </span> {assignment.grade} / 20
                                      </Link>
                                      <span className="assignment-coeff mb-1">Coeff : {assignment.coefficient}</span>
                                    </li>
                                  </ul>
                                ))
                              }
                            </article>
                          ))
                        }
                      </section>
                    ))
                  }
                </div>
            }
          </Wrapper>
        </div>
      </React.Fragment>
    );
  }

}

export default Details;

import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';

import store from '@App/App.store';

import { getPromotionId } from '@Promos/reducers/details.reducers';
import * as semestersListEffects from '@Semesters/effects/list.effects';
import * as promotionsDetailsEffects from '@Promos/effects/details.effects';

import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import SelectInput from '@Shared/components/SelectInput/SelectInput.components';
import Chart from '@Shared/components/Chart/Chart.components';

import { average, averageWithCoeff } from '@helpers/array.helpers';
import { backgroundChart } from '@helpers/chart.helpers';

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
    grades: Proptypes.arrayOf(Proptypes.shape({
      semesterId: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      ues: Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        name: Proptypes.string.isRequired,
        average: Proptypes.number.isRequired,
        subjects: Proptypes.arrayOf(Proptypes.shape({
          id: Proptypes.number.isRequired,
          name: Proptypes.string.isRequired,
          assignments: Proptypes.arrayOf(Proptypes.shape({
            id: Proptypes.number.isRequired,
            name: Proptypes.string.isRequired,
            description: Proptypes.string.isRequired,
            grade: Proptypes.number.isRequired,
            coefficient: Proptypes.number.isRequired
          })).isRequired
        })).isRequired
      })).isRequired,
    })).isRequired,
    tempGrades: Proptypes.arrayOf(Proptypes.shape({
      semesterId: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      ues: Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        name: Proptypes.string.isRequired,
        average: Proptypes.number.isRequired,
        subjects: Proptypes.arrayOf(Proptypes.shape({
          id: Proptypes.number.isRequired,
          name: Proptypes.string.isRequired,
          assignments: Proptypes.arrayOf(Proptypes.shape({
            id: Proptypes.number.isRequired,
            name: Proptypes.string.isRequired,
            description: Proptypes.string.isRequired,
            grade: Proptypes.number.isRequired,
            coefficient: Proptypes.number.isRequired
          })).isRequired
        })).isRequired
      })).isRequired,
    })).isRequired,
    semesters: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      label: Proptypes.string.isRequired
    })).isRequired
  };

  constructor() {
    super();
    this.state = {
      gradesForSemester: [],
      dataChart: {},
      optionsChart: {}
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

  formatChartData() {
    const labels = [...this.state.gradesForSemester.ues.map(ue => ue.name)];
    this.state.gradesForSemester.ues.map(ue => console.log('ue', ue));
    const data = {
      labels,
      datasets: [{
        label: 'Moyenne',
        data: [...this.state.gradesForSemester.ues.map(ue => ue.average)],
        backgroundColor: backgroundChart[0]
      }]
    };

    const options = {
      scale: {
        ticks: {
          beginAtZero: true,
          stepSize: 5,
          max: 20
        }
      }
    };

    this.setState({dataChart: data, optionsChart: options});
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
    }, () => this.formatChartData());
  }

  render() {
    const { identity, grades, semesters } = this.props;

    return (
      <React.Fragment>
        <h1 className="page-title">Détails d'un étudiant : </h1>
        <div className="flex justify-content-sb student-details">
          <div className="left-side">
            <Wrapper title="Identité" className="student-details__identity">
              <ul className="details-container">
                <li className="details-li"><span>Prénom : </span>{identity.firstname}</li>
                <li className="details-li"><span>Nom : </span>{identity.lastname}</li>
                <li className="details-li"><span>Identifiant : </span>{identity.username}</li>
                <li className="details-li"><span>Promotion : </span>{identity.promotion}</li>
                <li className="details-li"><span>TD{identity.td}</span></li>
              </ul>
            </Wrapper>

            <Wrapper title="En graphique" className="student-details__chart">
              {
                this.state.gradesForSemester.ues ?
                  <Chart title="Répartition des notes">
                    <Radar data={this.state.dataChart} options={this.state.optionsChart} height={300} />
                  </Chart>
                  : (<h1>Veuillez sélectionner un semestre</h1>)
              }
            </Wrapper>
          </div>

          <Wrapper title="Les notes" className="student-details__assignments">
            <SelectInput items={this.parsedItems(semesters)} placeholder="Sélectionner un semestre" selected={0} onChange={this.filterGrades} />
            {
              this.state.gradesForSemester.ues &&
                <React.Fragment>
                  <ul className="details-container mt-2">
                    <li className="details-li"><span>Moyenne du semestre : </span>{average(this.state.gradesForSemester.ues, 'average')}</li>
                  </ul>
                  <div className="assignments-container inline mt-2">
                    {
                      this.state.gradesForSemester.ues.map(ue => (
                        <section className="ue-section" key={ue.id}>
                          <h1 className="ue-title mb-3">{ue.name} - {ue.average}</h1>
                          {
                            ue.subjects.map(subject => (
                              <article className="subject-article pl-3" key={subject.id}>
                                <h2 className="subject-title mb-2">{subject.name} - {averageWithCoeff(subject.assignments, 'grade')}</h2>
                                {
                                  subject.assignments.map(assignment => (
                                    <ul key={assignment.id} className="assignment-list">
                                      <li className="flex flex-column block">
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
                </React.Fragment>
            }
          </Wrapper>
        </div>
      </React.Fragment>
    );
  }

}

export default Details;

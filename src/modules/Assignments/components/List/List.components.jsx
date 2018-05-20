import React from 'react';
import Proptypes from 'prop-types';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';

import Wrapper from '@Shared/components/Wrapper/Wrapper.components';
import store from '@App/App.store';
import { getPromotionId } from '@Promos/reducers/details.reducers';
import * as promotionsDetailsEffects from '@Promos/effects/details.effects';

class List extends React.Component {

  static propTypes = {
    getAssignmentsList: Proptypes.func.isRequired,
    assignments: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      ues: Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        name: Proptypes.string.isRequired,
        subjects: Proptypes.arrayOf(Proptypes.shape({
          id: Proptypes.number.isRequired,
          name: Proptypes.string.isRequired,
          assignments: Proptypes.arrayOf(Proptypes.shape({
            id: Proptypes.number.isRequired,
            description: Proptypes.string.isRequired,
            coefficient: Proptypes.number.isRequired
          })).isRequired
        })).isRequired
      })).isRequired,
    })).isRequired,
    match: Proptypes.shape({
      params: Proptypes.shape({
        promotionId: Proptypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  componentDidMount() {
    this.props.getAssignmentsList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.promotionId !== getPromotionId(store.getState())) {
      store.dispatch(promotionsDetailsEffects.getPromotion(+nextProps.match.params.promotionId));
    }
  }

  render() {
    const { assignments } = this.props;
    return (
      <React.Fragment>
        <h1 className="page-title">Liste des devoirs de la promo {this.props.match.params.promotionId}</h1>
        <div className="flex justify-content-sb assignments-container">
          {
            assignments.map(semester => (
              <Wrapper key={semester.id} title={`Devoirs du Semestre ${semester.id}`} className={`semester semester-${semester.id}`}>
                {
                  semester.ues.map(ue => (
                    <section className="ue-section" key={ue.id}>
                      <h1 className="ue-title mb-3">{ue.name}</h1>
                      {
                        ue.subjects.map(subject => (
                          <article className="subject-article pl-3" key={subject.id}>
                            <h2 className="subject-title mb-2">{subject.name}</h2>
                            {
                              subject.assignments.map(assignment => (
                                <ul key={assignment.id} className="assignment-list">
                                  <li className="assignment">
                                    <Link to={`/promotions/${this.props.match.params.promotionId}/assignments/${assignment.id}`} className="link link__black">{assignment.name}</Link>
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
              </Wrapper>
            ))
          }
        </div>
      </React.Fragment>
    );
  }

}

export default List;

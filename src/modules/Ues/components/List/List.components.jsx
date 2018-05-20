import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import store from '@App/App.store';
import { getPromotionId } from '@Promos/reducers/details.reducers';
import * as promotionsDetailsEffects from '@Promos/effects/details.effects';

import Details from '@Ues/components/Details/Details.components';
import Wrapper from '@Shared/components/Wrapper/Wrapper.components';

class List extends React.Component {

  static propTypes = {
    getUesList: Proptypes.func.isRequired,
    ues: Proptypes.arrayOf(Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
      ues: Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        name: Proptypes.string.isRequired,
        subjects: Proptypes.arrayOf(Proptypes.shape({
          id: Proptypes.number.isRequired,
          name: Proptypes.string.isRequired
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
    this.props.getUesList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.promotionId !== getPromotionId(store.getState())) {
      store.dispatch(promotionsDetailsEffects.getPromotion(+nextProps.match.params.promotionId));
    }
  }

  render() {
    const { ues } = this.props;

    return (
      <React.Fragment>
        <h1 className="page-title">Liste des cours pour la promo {this.props.match.params.promotionId}</h1>
        <div className="flex justify-content-sb assignments-container">
          {
            ues.map(semester => (
              <Wrapper key={semester.id} title={`Cours du Semestre ${semester.id}`} className={`semester semester-${semester.id}`}>
                {
                  semester.ues.map(ue => (
                    <section className="ue-section" key={ue.id}>
                      <h1 className="ue-title mb-3">{ue.name}</h1>
                      {
                        ue.subjects.map(subject => (
                          <article className="subject-article pl-3" key={subject.id}>
                            <h2 className="subject-title mb-2">{subject.name}</h2>
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

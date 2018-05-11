import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import DetailsPromotion from '@Promos/containers/Details.containers';
import ListPromotions from '@Promos/containers/List.containers';

import GradesForm from '@Grades/containers/Form.containers';

import SubjectsModule from '@Subjects/Subjects.modules';

class PromosModule extends React.Component {

  render() {
    return (
      <Switch>
        {/* <PrivateRoute path='/promotions/:promotionId/subjects/:subjectId' allowed={['admin']} component={GradesForm} />
        <PrivateRoute path='/promotions/:promotionId/subjects/add' allowed={['admin']} component={GradesForm} /> */}
        <PrivateRoute path='/promotions/:promotionId/subjects' allowed={['admin']} component={SubjectsModule} />
        <PrivateRoute path='/promotions/:promotionId' allowed={['admin']} component={DetailsPromotion} />
        <PrivateRoute path='/promotions' allowed={['admin']} component={ListPromotions} />
      </Switch>
    );
  }

}

export default PromosModule;

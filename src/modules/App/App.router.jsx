import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';
import Error from '@App/components/Error/Error.components';

import ListUe from '@Ues/containers/List.containers';

import DetailsPromotion from '@Promos/containers/Details.containers';
import ListPromotions from '@Promos/containers/List.containers';

import AssignmentsForm from '@Assignments/containers/Form.containers';
import AssignmentsList from '@Assignments/containers/List.containers';

import DetailsStudent from '@Students/containers/Details.containers';

import GradesList from '@Grades/containers/List.containers';

import SemestersList from '@Semesters/containers/List.containers';

import AbsencesList from '@Absences/containers/List.containers';

class Router extends React.Component {

  render() {
    return (
      <Switch>
        <PrivateRoute path='/semesters' allowed={['admin']} component={SemestersList} />

        <PrivateRoute path='/subjects' allowed={['admin']} component={ListUe} />

        <PrivateRoute path='/students/:username' allowed={['admin']} component={DetailsStudent} />

        <PrivateRoute path='/grades' allowed={['admin']} component={GradesList} />


        <PrivateRoute exact path='/promotions/:promotionId/assignments' allowed={['admin']} component={AssignmentsList} />
        <PrivateRoute exact path='/promotions/:promotionId/assignments/add' allowed={['admin']} component={AssignmentsForm} />
        <PrivateRoute exact path='/promotions/:promotionId/assignments/:assignmentId' allowed={['admin']} component={AssignmentsForm} />
        <PrivateRoute exact path='/promotions/:promotionId' allowed={['admin']} component={DetailsPromotion} />
        <PrivateRoute exact path='/promotions/:id/absences' allowed={['admin']} component={AbsencesList} />
        <PrivateRoute exact path='/promotions/:id/addAbsences' allowed={['admin']} component={AbsencesList} />
        <PrivateRoute exact path='/promotions' allowed={['admin']} component={ListPromotions} />

        <Route exact path='*' component={Error} />
      </Switch>
    );
  }

}

export default Router;

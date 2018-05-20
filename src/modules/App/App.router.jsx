import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';
import Error from '@App/components/Error/Error.components';

import ListUe from '@Ues/containers/List.containers';

import PromotionsDetails from '@Promos/containers/Details.containers';
import PromotionList from '@Promos/containers/List.containers';

import AssignmentsForm from '@Assignments/containers/Form.containers';
import AssignmentsDetails from '@Assignments/containers/Details.containers';
import AssignmentsList from '@Assignments/containers/List.containers';

import StudentsDetails from '@Students/containers/Details.containers';

import GradesList from '@Grades/containers/List.containers';

import SemestersList from '@Semesters/containers/List.containers';

import AbsencesList from '@Absences/containers/List.containers';


class Router extends React.Component {

  render() {
    return (
      <Switch>
        <PrivateRoute path='/semesters' allowed={['admin']} component={SemestersList} />

        <PrivateRoute exact path='/promotions/:promotionId/subjects' allowed={['admin']} component={ListUe} />

        <PrivateRoute exact path='/promotions/:promotionId/students/:username' allowed={['admin']} component={StudentsDetails} />

        <PrivateRoute exact path='/promotions/:promotionId/absences' allowed={['admin']} component={AbsencesList} />

        <PrivateRoute exact path='/promotions/:promotionId/assignments/:assignmentId/edit' allowed={['admin']} component={AssignmentsForm} />
        <PrivateRoute exact path='/promotions/:promotionId/assignments/add' allowed={['admin']} component={AssignmentsForm} />
        <PrivateRoute exact path='/promotions/:promotionId/assignments/:assignmentId' allowed={['admin']} component={AssignmentsDetails} />

        <PrivateRoute exact path='/promotions/:promotionId/assignments' allowed={['admin']} component={AssignmentsList} />
        <PrivateRoute exact path='/promotions/:promotionId' component={PromotionsDetails} />
        <PrivateRoute exact path='/promotions' allowed={['admin']} component={PromotionList} />

        <Route exact path='*' component={Error} />
      </Switch>
    );
  }

}

export default Router;

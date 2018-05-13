import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import ListUe from '@Ues/containers/List.containers';

import DetailsPromotion from '@Promos/containers/Details.containers';
import ListPromotions from '@Promos/containers/List.containers';

import AssignmentsForm from '@Assignments/containers/Form.containers';
import AssignmentsList from '@Assignments/containers/List.containers';

import DetailsStudent from '@Students/containers/Details.containers';

import GradesList from '@Grades/containers/List.containers';

import SemestersList from '@Semesters/containers/List.containers';


class Main extends React.Component {

  render() {
    return (
      <React.Fragment>

        {/*
        <Switch>
            <Route path='/grades' component={GradesList} />
          </Switch> */}

        <Switch>
          <PrivateRoute path='/semesters' allowed={['admin']} component={SemestersList} />
        </Switch>

        <Switch>
          <PrivateRoute path='/courses' allowed={['admin']} component={ListUe} />
        </Switch>

        <Switch>

          <PrivateRoute path='/grades' allowed={['admin']} component={GradesList} />
        </Switch>

        {/* STUDENTS */}
        <Switch>
          <PrivateRoute path='/students/:username' allowed={['admin']} component={DetailsStudent} />
        </Switch>

        <Switch>
          <PrivateRoute path='/promotions/:promotionId/assignments/add' allowed={['admin']} component={AssignmentsForm} />
          <PrivateRoute path='/promotions/:promotionId/assignments' allowed={['admin']} component={AssignmentsList} />
          <PrivateRoute path='/promotions/:promotionId' allowed={['admin']} component={DetailsPromotion} />
          <PrivateRoute path='/promotions' allowed={['admin']} component={ListPromotions} />
        </Switch>

      </React.Fragment>
    );
  }
}

export default Main;

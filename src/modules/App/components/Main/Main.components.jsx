import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import ListUe from '@Ues/containers/List.containers';

import DetailsPromotion from '@Promos/containers/Details.containers';
import ListPromotions from '@Promos/containers/List.containers';

import DetailsStudent from '@Students/containers/Details.containers';

import GradesList from '@Grades/containers/List.containers';

import SemestersList from '@Semesters/containers/List.containers';

import Form from '@Grades/components/Form/Form.components';

import AbsencesList from '@Absences/containers/List.containers';

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

          <PrivateRoute path='/courses' allowed={['admin']} component={ListUe} />

          <PrivateRoute path='/grades' allowed={['admin']} component={GradesList} />

          {/* STUDENTS */}
          <PrivateRoute path='/students/:username' allowed={['admin']} component={DetailsStudent} />

          {/* ABSENCES */}

          <PrivateRoute path='/promotions/:id/absences' allowed={['admin']} component={AbsencesList} />
          <PrivateRoute path='/promotions/:id/addAbsences' allowed={['admin']} component={AbsencesList} />
          <PrivateRoute path='/absences' allowed={['admin']} component={AbsencesList} />
          {/* PROMOTIONS */}
          <PrivateRoute path='/promotions/:id/addGrade' allowed={['admin']} component={Form} />
          <PrivateRoute path='/promotions/:id' allowed={['admin']} component={DetailsPromotion} />
          <PrivateRoute path='/promotions' allowed={['admin']} component={ListPromotions} />
        </Switch>

      </React.Fragment>
    );
  }
}

export default Main;

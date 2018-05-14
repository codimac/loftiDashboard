import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import ListUe from '@Ues/containers/List.containers';

import PromosModule from '@Promos/Promos.modules';
// import DetailsPromotion from '@Promos/containers/Details.containers';
// import ListPromotions from '@Promos/containers/List.containers';

import DetailsStudent from '@Students/containers/Details.containers';

import GradesList from '@Grades/containers/List.containers';

import SemestersList from '@Semesters/containers/List.containers';


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
          <PrivateRoute path='/absences' allowed={['admin']} component={AbsencesList} />
          <PrivateRoute path='/promotions/:id/absences' allowed={['admin']} component={AbsencesList} />
          <PrivateRoute path='/promotions/:id/addAbsences' allowed={['admin']} component={AbsencesList} />
          {/* PROMOTIONS */}
        </Switch>
        <Route>
          <PrivateRoute path='/promotions' allowed={['admin']} component={PromosModule} />
        </Route>

      </React.Fragment>
    );
  }
}

export default Main;

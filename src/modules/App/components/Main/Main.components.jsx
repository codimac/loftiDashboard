import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import ListUe from '@Courses/containers/uesList.containers';

import Promotion from '@Promos/containers/Details.containers';
import ListPromotions from '@Promos/containers/List.containers';

import GradesList from '@Grades/containers/List.containers';
import DetailsStudent from '@Students/containers/Details.containers';

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>

        <Switch>
          <Route path='/courses' component={ListUe} />
          <Route path='/grades' component={GradesList} />
        </Switch>

        {/* STUDENTS */}
        <Switch>
          <PrivateRoute path='/students/:username' allowed={['admin']} component={DetailsStudent} />
        </Switch>

        {/* PROMOTIONS */}
        <Switch>
          <PrivateRoute path='/promotions/:id' allowed={['admin']} component={Promotion} />
          <PrivateRoute path='/promotions' allowed={['admin']} component={ListPromotions} />
        </Switch>

      </React.Fragment>
    );
  }
}

export default Main;

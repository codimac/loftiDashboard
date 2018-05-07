import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import ListUe from '@Courses/containers/uesList.containers';

import Promotion from '@Promos/containers/Details.containers';
import ListPromotions from '@Promos/containers/List.containers';

import GradesList from '@Grades/containers/List.containers';
import StudentDetails from '@Students/containers/Details.containers';

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/courses' component={ListUe} />
          <Switch>
            <PrivateRoute path='/promotions' allowed={['admin']} component={ListPromotions} />
            <PrivateRoute path='/promotions/:id' allowed={['admin']} component={Promotion} />
          </Switch>
          <PrivateRoute path='/students/:username' allowed={['admin']} component={StudentDetails} />
          <Route path='/grades' component={GradesList} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;

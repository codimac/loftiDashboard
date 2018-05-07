import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import ListUe from '@Courses/containers/uesList.containers';
import Promotion from '@Promos/containers/Details.containers';
import GradesList from '@Grades/containers/List.containers';
import StudentDetails from '@Students/containers/Details.containers';

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/courses' component={ListUe} />
          <PrivateRoute exact path='/promotions/:id' allowed={['admin']} component={Promotion} />
          <PrivateRoute exact path='/students/:username' allowed={['admin']} component={StudentDetails} />
          <Route exact path='/grades' component={GradesList} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;

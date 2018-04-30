import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import Promotion from '@Promos/containers/Details.containers';
import GradesList from '@Grades/containers/List.containers';
import ListUe from '@Courses/components/Ues/ListUe.components';

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/courses' component={ListUe} />
          <Route exact path='/grades' component={GradesList} />
          <Route exact path='/promotions' component={Promotion} />
        </Switch>
      </React.Fragment>
    );
  }

}

export default Main;

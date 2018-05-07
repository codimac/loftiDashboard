import React from 'react';
import Promotion from '@Promos/containers/Details.containers';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import ListUe from '@Courses/containers/uesList.containers';

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/courses' component={ListUe} />
          <PrivateRoute exact path='/promotions' allowed={['admin']} component={Promotion} />
          <PrivateRoute path='/promotions/:id' allowed={['admin']} component={Promotion} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;

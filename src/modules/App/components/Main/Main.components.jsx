import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

import ListUe from '@Courses/containers/uesList.containers';

import DetailsPromotion from '@Promos/containers/Details.containers';
import ListPromotions from '@Promos/containers/List.containers';

import DetailsStudent from '@Students/containers/Details.containers';

import GradesList from '@Grades/containers/List.containers';
import Form from '@Grades/components/Form/Form.components'

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>

        {/*
        <Switch>
            <Route path='/courses' component={ListUe} />
            <Route path='/grades' component={GradesList} />
          </Switch> */}

        <Switch>
          <PrivateRoute path='/grades/add' allowed={['admin']} component={Form} />
          <PrivateRoute path='/grades' allowed={['admin']} component={GradesList} />
        </Switch>

        {/* STUDENTS */}
        <Switch>
          <PrivateRoute path='/students/:username' allowed={['admin']} component={DetailsStudent} />
        </Switch>

        {/* PROMOTIONS */}
        <Switch>
          <PrivateRoute path='/promotions/:id' allowed={['admin']} component={DetailsPromotion} />
          <PrivateRoute path='/promotions' allowed={['admin']} component={ListPromotions} />
        </Switch>

      </React.Fragment>
    );
  }
}

export default Main;

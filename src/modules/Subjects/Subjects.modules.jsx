import React from 'react';
import { Switch } from 'react-router';
import { PrivateRoute } from '@modules/Shared/components/PrivateRoute.components';

import List from '@Subjects/components/List/List.components';

class SubjectsModule extends React.Component {

  render() {
    return (
      <Switch>
        <h1>ok</h1>
        <PrivateRoute path='subjects' allowed={['admin']} component={List} />
      </Switch>
    );
  }

}

export default SubjectsModule;

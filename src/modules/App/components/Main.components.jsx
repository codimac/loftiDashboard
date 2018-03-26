import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Counter from '@modules/Counter/Counter.components';
import ListPost from '@modules/Post/containers/List.containers';
import DetailPost from '@modules/Post/components/Detail.components';
import TodoListModule from '@modules/TodoList/TodoListModule';
import Home from './Home.components';

class Main extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/todos' component={TodoListModule} />
        <Route path='/posts/:id' component={DetailPost} />
        <Route path='/posts' component={ListPost} />
      </Switch>
    );
  }

}

export default Main;

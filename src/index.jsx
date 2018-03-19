import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from '@components/App/App';
import store from '@components/App/App.store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    render(App);
    render(require('./components/App/App'));
  });
}

// import store from '@components/App/App.store';
// import { addTodo } from '@components/App/App.actions';

// window.store = store;
// window.addTodo = addTodo;


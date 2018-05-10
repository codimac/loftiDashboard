import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { history } from '@helpers/history.helpers';
import App from '@modules/App/App';
import store from '@modules/App/App.store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('modules/App/App', () => {
    render(App);
    render(require('./modules/App/App'));
  });
}

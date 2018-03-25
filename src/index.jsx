import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from '@modules/App/App';
import store from '@modules/App/App.store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./modules/App/App', () => {
    render(App);
    render(require('./modules/App/App'));
  });
}

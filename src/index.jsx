import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';

store.subscribe(() => {
  localStorage.setItem(
    'boardsList',
    JSON.stringify(store.getState().boardsList)
  );
});

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('root')
);

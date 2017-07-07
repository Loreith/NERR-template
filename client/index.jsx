// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider, connect } from 'react-redux';

// import the redux store
import store from './store';

// Initialise browser history for react-router
const history = syncHistoryWithStore(createBrowserHistory(), store);

import Layout from './pages/Layout';
import Home from './pages/Home';



/*
 *  Client entry point
 *
 *  Structure:
 *    -store.js
 *        Redux store defention, middleware and reducer collation and action.
 *    -index.html
 *        HTML file served to client by server.
 *    -pages
 *      "Smart" react components used in the router.
 *    -components
 *      "Dumb" react components used by pages. Ideally re-usable and single-pupose.
 *    -actions
 *      Redux action defentions.
 *    -middleware
 *      Redux middleware defenition.
 *    -reducers
 *      Redux reducer defention and collation for store.js
 *    -styles
 *      Non-package styles such as themes.
 *
 */


//Create the app from pages and react router.
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
}

// render the app, wrapping in the Provider component to give it access to
// the Redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app') //eslint-disable-line
);

// redux
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

// api middleware
import api from './middleware/api';
// reducers
import reducer from './reducers';


// custom middleware for handling redux errors
const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('Error: ', e);
  }
};

//Apply middleware and create store
const middleware = applyMiddleware(api, promise(), error, thunk);

export default createStore(reducer, {}, middleware);

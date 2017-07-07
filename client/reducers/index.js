import { combineReducers } from 'redux';

import { routerReducer as routing } from 'react-router-redux';

//Import reducers
import viewSettings from './viewSettings';

//Combine all redux reducers along with the react-router history
export default combineReducers({
  routing,
  viewSettings
});

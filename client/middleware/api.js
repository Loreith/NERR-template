// ajax library
import axios from 'axios';

// constants
export const BASE_URL = '';
export const CALL_API = Symbol('Call API');

/**
 * Call the specified API endpoint
 *  Intercepts actions with the CALL_API tag
 * @param  {string}   endpoint        the API URL endpoint
 * @param  {string}   method          http request type (post/get)
 * @param  {boolean}  authenticated   does the resource require authentication ?
 * @return {Promise}                  the promise result from the ajax request
 */

function callApi(endpoint, authenticated, method='get', payload) {
  // set config
  const config = {
    method,
    url: BASE_URL + endpoint,
    headers: {
      Accept: 'application/json',
    },
  };

  if (payload) {
    config.data = payload;
  }

  return (
    axios(config)
      .then(response => {
        const { data, status } = response;
        return status === 200 ? data : Promise.reject(response);
      })
      .catch(err => {
        console.log(err);
        return err;
      })
  );
}

// export the middleware
export default (store) => (next) => (action) => {
  // extract CALL_API action prop
  const callAPI = action[CALL_API];
  // skip actions not containing the CALL_API property
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  // extract API-related config from the Action props
  // note: Types refer to the action to dispatch under each condition
  const { endpoint, types, authenticated, method, payload } = callAPI;
  const [requestType, successType, errorType] = types;

  // Alternative (less verbose) logger only triggered for api calls
  //console.log(store.getState());

  return (
    callApi(endpoint, authenticated, method, payload)
      .then(payload =>
        next({
          type: successType,
          payload,
          authenticated,
        })
      )
      .catch(err =>
        next({
          error: err.message || 'Oops. Something went wrong.',
          type: errorType,
        })
      )
  );
};

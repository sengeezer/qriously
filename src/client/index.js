import 'babel-polyfill';

import { APP_CONTAINER_SELECTOR } from '../shared/config';

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = '<h1>Hello World!</h1>';

/*
API call example:

import 'isomorphic-fetch';

import { helloEndpointRoute } from '../../shared/routes';

const callAPI = () => {
  return fetch(helloEndpointRoute(num), { method: 'GET' })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      return res.json()
    })
    .then((data) => {
      if (!data.serverMessage) {
        throw Error('No message received');
      }
      // do something with the data here
    })
    .catch(() => {
      // catch the error
    });
};

*/

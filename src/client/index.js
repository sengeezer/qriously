import 'babel-polyfill';

import { APP_CONTAINER_SELECTOR } from '../shared/config';

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = '<h1>Hello World!</h1>';

/*
API call example:

import 'isomorphic-fetch';

import { answerIdRoute } from '../../shared/routes';

const callAPI = (id) => {
  return fetch(answerIdRoute(id), { method: 'GET' })
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

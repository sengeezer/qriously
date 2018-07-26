import 'babel-polyfill';
import 'isomorphic-fetch';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { answerIdRoute } from '../shared/routes';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import data from './config';

const pageTemplate = require('./templates/page.hbs');

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = pageTemplate(data);

const callAPI = (id) => {
  return fetch(`${answerIdRoute()}?id=${id}`, { method: 'GET' })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => {
      if (!data.serverMessage) {
        throw Error('No message received');
      }
      // do something with the data here
      console.log(data);
    })
    .catch(() => {
      // catch the error
    });
};

callAPI(1);

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
      console.log(data);
    })
    .catch(() => {
      // catch the error
    });
};

*/

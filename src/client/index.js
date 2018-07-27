import 'babel-polyfill';
import 'isomorphic-fetch';
import ZingTouch from 'zingtouch';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { answerIdRoute } from '../shared/routes';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import confData from './config';

const pageTemplate = require('./templates/page.hbs');

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = pageTemplate(confData);

const ztRegion = ZingTouch.Region(document.getElementById('container'));

const callAPI = (id) => {
  fetch(`${answerIdRoute()}?id=${id}`, { method: 'GET' })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => {
      // do something with the data here
      console.log(data);
    })
    .catch(() => {
      // catch the error
    });
};

const answers = document.getElementsByTagName('li');
const answerEls = Object.entries(answers);

answerEls.forEach((item, i) => {
  ztRegion.bind(item[1], 'tap', (ev) => {
    // console.log(ev.target.getAttribute('data-answerid'));
    callAPI(ev.target.getAttribute('data-answerid'));
  });
});

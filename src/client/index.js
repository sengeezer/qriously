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

const answers = document.getElementsByTagName('li');
const answerEls = Object.entries(answers);

answerEls.forEach((item, i) => {
  ztRegion.bind(item[1], 'tap', (ev) => {
    console.log(ev);
  });
});

// ztRegion.bind(document.getElementsByTagName('li')[0], 'tap', (ev) => {
//   console.log(ev);
// });

const callAPI = id => fetch(`${answerIdRoute()}?id=${id}`, { method: 'GET' })
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

callAPI(1);

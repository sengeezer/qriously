import 'babel-polyfill';
import 'isomorphic-fetch';
import Hammer from 'hammerjs';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { answerIdRoute } from '../shared/routes';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import confData from './config';

const pageTemplate = require('./templates/page.hbs');
const resultTemplate = require('./templates/result.hbs');

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = pageTemplate(confData);

const hammer = new Hammer(document.getElementById('answerRange'));

const callAPI = (id) => {
  fetch(`${answerIdRoute()}?id=${id}`, { method: 'GET' })
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => {
      document.querySelector('.result').innerHTML = resultTemplate(data);
      document.querySelector('.question').classList.toggle('hidden');
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const answers = document.getElementsByTagName('li');
const answerEls = Object.entries(answers);

answerEls.forEach((item) => {
  const hammerOpt = new Hammer(item[1]);
  hammerOpt.on('tap', (ev) => {
    callAPI(ev.target.getAttribute('data-answerid'));
  });
});

hammer.get('pan').set({ threshold: 30 });

hammer.on('panend', () => {
  document.querySelector('.question').classList.toggle('hidden');
  document.querySelector('.slider').classList.toggle('hidden');
});

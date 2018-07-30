import 'babel-polyfill';
import 'isomorphic-fetch';
import Hammer from 'hammerjs';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { APP_CONTAINER_SELECTOR } from '../shared/config';
import callAPI from './callAPI';

// Set up question
import confData from './config';

const pageTemplate = require('./templates/page.hbs');

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = pageTemplate(confData);

// Handle gestures
const slideHammer = new Hammer(document.querySelector('.slider'));
const hammer = new Hammer(document.getElementById('answerRange'));

const answers = document.getElementsByTagName('li');
const answerEls = Object.entries(answers);

answerEls.forEach((item) => {
  const hammerOpt = new Hammer(item[1]);
  hammerOpt.on('tap', (ev) => {
    callAPI(ev.target.getAttribute('data-answerid'));
  });
});

slideHammer.on('tap', () => {
  document.querySelector('.question').classList.toggle('hidden');
  document.querySelector('.slider').classList.toggle('hidden');
});

hammer.get('pan').set({ threshold: 30 });

hammer.on('panend', () => {
  document.querySelector('.question').classList.toggle('hidden');
  document.querySelector('.slider').classList.toggle('hidden');
});

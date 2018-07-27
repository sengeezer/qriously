import express from 'express';

import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config';
import { isProd } from '../shared/util';

import renderApp from './render-app';

import { answerIdRoute } from '../shared/routes';

const app = express();

app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME));
});

app.get(answerIdRoute(), (req, res) => {
  const answerId = Number(req.query.id);

  if (answerId === 1 || answerId === 2 || answerId === 3) {
    res.status(200).send(JSON.stringify({
      result: [
        53 + Math.round(Math.random() * 10),
        8 + Math.round(Math.random() * 10),
        12 + Math.round(Math.random() * 10),
      ],
    }));
  } else {
    res.status(403).send(JSON.stringify({
      error: 'Invalid response, should be /answer?id=...',
    }));
  }
});

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`);
});

import { answerIdRoute } from '../shared/routes';

const resultTemplate = require('./templates/result.hbs');

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

export default callAPI;

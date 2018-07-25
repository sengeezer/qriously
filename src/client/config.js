import { WEB_PORT } from '../shared/config';
import { answerIdRoute } from '../shared/routes';

export default {
  question: 'How are you feeling today?',
  answers: [
    {
      label: 'Great',
      id: 1,
    },
    {
      label: 'OK',
      id: 2,
    },
    {
      label: 'Bad',
      id: 3,
    },
  ],
  postUrl: `http://localhost:${WEB_PORT}${answerIdRoute}`,
};

import { STATIC_PATH } from '../shared/config';

const renderApp = title => `
<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link href="${STATIC_PATH}/css/styles.css" rel="stylesheet">
  </head>
  <body>
    <h1>${title}</h1>
  </body>
</html>
`;

export default renderApp;

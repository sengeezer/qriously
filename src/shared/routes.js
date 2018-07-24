export const helloEndpointRoute = num => `/ajax/hello/${num || ':num'}`;

export const answerIdRoute = id => `/answer/${id || ':id'}`;

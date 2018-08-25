import {
  SERVER_URL,
  endpoints,
  mockResponses,
} from '../config/api.config';
import env from '../config/env.config';
import {result} from 'lodash';

const parseJson = (response) => new Promise((resolve, reject) => {
  response.json().then((result) => {
    response.data = result;
    resolve(response);
  }).catch((err) => {
    response.data = err;
    reject(response);
  });
});

const fetchData = (url, config) => fetch(url, config)
  .then(parseJson)
  .then((response) => {
    const {status} = response;
    if (status >= 200 && status < 300) { // if call api successfully
      return result(response, 'data', {});
    }

    if (status === 400) { // for bad request
      throw response;
    }
    throw response; // for other response (above 400)
  });

const GET = (path, headers, dinamicPath = '') => {
  const url = SERVER_URL + endpoints[path] + dinamicPath;
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers
    },
  };
  return fetchData(url, config);
};

const POST = (path, body, headers, dinamicPath = '') => {
  const url = SERVER_URL + endpoints[path] + dinamicPath;
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...headers
    },
  };
  return fetchData(url, config);
};

const mock = (endpoint) => {
  const response = mockResponses[endpoint];
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(result(response, 'data', {})), 1000);
      // eslint-disable-next-line
      console.log('SET UP MOCKUP FOR', endpoint);
    } catch (exception) {
      reject(exception);
    }
  });
};

export default {
  get GET () {
    return env.MOCKAPI ? mock : GET;
  },
  get POST () {
    return env.MOCKAPI ? mock : POST;
  },
};

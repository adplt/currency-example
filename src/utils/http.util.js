import {
  API_URL,
  endpoints,
} from '../config/api.config';
import {remove, storageKeys} from './storage.util';
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
    if (status >= 200 && status < 300) {
      return result(response, 'data', {});
    }

    if (status === 401) {
      remove(storageKeys['USER_DATA']);
    }

    if (status === 400) {
      throw response;
    }
    throw response;
  });

const GET = (path, headers, dinamicPath = '') => {
  const url = API_URL + endpoints[path] + dinamicPath;
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
  };
  return fetchData(url, config);
};

const POST = (path, body, headers, dinamicPath = '') => {
  const url = API_URL + endpoints[path] + dinamicPath;
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    credentials: 'include',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
  };
  return fetchData(url, config);
};

export default {
  get GET () {
    return GET;
  },
  get POST () {
    return POST;
  },
};

import env from './env.config';

export const SERVER_URL = env.URL_BASE;

export const endpoints = {
  GET_CURRENCY_RATE: '/latest',
};

export const mockResponses = env.fixtures || {};

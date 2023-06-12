/* eslint-disable @typescript-eslint/no-var-requires */
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

jest.mock('next/dist/shared/lib/router-context', () => {
  const { createContext } = require('react');
  const router = require('next-router-mock').default;
  const RouterContext = createContext(router);
  return { RouterContext };
});

import axios from 'axios';
import { CatFactInterceptor } from './interceptor/catfact-interceptor';

const axiosInstance = axios.create({
  baseURL: process.env['NEXT_PUBLIC_CATFACT_API_URL'],
});

axiosInstance.interceptors.response.use(
  CatFactInterceptor.responseSuccess,
  CatFactInterceptor.resposneError
);

export const catFactsInstace = axiosInstance;

import type { AxiosResponse, AxiosError } from 'axios';

export const CatFactInterceptor = {
  // requestSuccess(config: AxiosRequestConfig) {
  //   return { ...config, headers: { ...config.headers,  } };
  // },
  responseSuccess({ data, ...rest }: AxiosResponse) {
    return { ...rest, data };
  },
  resposneError(axiosError: AxiosError): Promise<AxiosError> {
    const response = axiosError?.response;
    console.error('Error CatFact response', response);
    return Promise.reject(axiosError);
  },
};

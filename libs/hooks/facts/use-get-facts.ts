import { catFactsInstace } from '@/libs/api/catfact-api';
import { useState, useEffect } from 'react';
import { TFacts, TFactResult } from '@types';

export const useGetFacts = () => {
  const [data, setData] = useState<TFactResult[]>([]);
  const [error, setError] = useState<string | null | any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [params, setParams] = useState<TFacts | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (!params) return;
        const res = await catFactsInstace.request({
          method: 'get',
          url: '/facts',
          params: {
            max_length: params?.maxLength,
            limit: params?.limit,
          },
        });

        if (res.status !== 200) {
          throw new Error('Error fetching data');
        }
        setData(res.data.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params]);

  return { data, error, isLoading, setParams };
};

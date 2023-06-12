import { catFactsInstace } from '@/libs/api/catfact-api';
import { useState, useEffect } from 'react';
import { TFactResult, TRandomFact } from '@types';

export const useGetRandomFact = () => {
  const [data, setData] = useState<TFactResult>();
  const [error, setError] = useState<string | null | any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [params, setRandomParams] = useState<TRandomFact | null>(null);

  useEffect(() => {
    setIsLoading(false);
    setError(null);
    (async () => {
      try {
        if (!params) return;
        const res = await catFactsInstace.request({
          method: 'get',
          url: '/fact',
          params: {
            max_length: params?.maxLength,
          },
        });

        if (res.status !== 200) {
          throw new Error('Error fetching data');
        }

        setData(res.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(true);
      }
    })();
  }, [params]);

  return { data, error, isLoading, setRandomParams };
};

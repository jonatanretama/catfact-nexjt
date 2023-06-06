import { catFactsInstace } from '@/libs/api/catfact-api';
import { useState, useEffect } from 'react';

type TFacts = {
  fact: string;
  length: number;
};

export const useGetFact = () => {
  const [data, setData] = useState<TFacts[]>([]);
  const [error, setError] = useState<string | null | any>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await catFactsInstace.request({
          method: 'get',
          url: '/facts',
          params: {
            max_length: 40,
            limit: 1,
          },
        });

        setData(res.data.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { data, error, loaded };
};

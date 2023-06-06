'use client';

import styles from './page.module.css';
import { useGetFact } from '@/libs/hooks/facts/use-get-fact';

type TFacts = {
  fact: string;
  length: number;
};

export default function Home() {
  const { data } = useGetFact();

  return (
    <main className={styles.main}>
      <ul>
        {data?.map((item: TFacts, index) => (
          <li key={`fact-${index}`}>{item.fact}</li>
        ))}
      </ul>
    </main>
  );
}

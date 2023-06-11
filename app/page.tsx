'use client';

import styles from './page.module.css';
import { FactContainer } from '@/libs/components';
// import { useGetFacts } from '@/libs/hooks/facts/use-get-fact';

export default function Home() {
  // const { data } = useGetFact();

  return (
    <main className={styles.main}>
      {/* <ul>
        {data?.map((item: TFacts, index) => (
          <li key={`fact-${index}`}>{item.fact}</li>
        ))}
      </ul> */}
      <FactContainer />
    </main>
  );
}

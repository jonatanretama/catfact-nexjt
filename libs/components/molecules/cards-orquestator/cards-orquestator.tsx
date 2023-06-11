import type { FC } from 'react';
import type { TFactResult, TFactData } from '@types';
import styles from './cards-orquestator.module.css';

export const CardsOrquestator: FC<TFactData> = ({ data }) => (
  <section className={styles['orquestator']}>
    {data?.map((item: TFactResult, index) => (
      <div className={styles['card-container']} key={`fact-card-${index}`}>
        <div className={styles['card-content']}>{item.fact}</div>
        <div className={styles['card-length']}>
          Length&nbsp;<div className={styles['length']}>{item.length}</div>
        </div>
      </div>
    ))}
  </section>
);

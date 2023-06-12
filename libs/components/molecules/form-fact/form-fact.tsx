import { FC, useRef, useState } from 'react';
import { useGetFacts, useGetRandomFact } from '@hooks';
import { CardsOrquestator } from '../cards-orquestator';
import styles from './form-fact.module.css';
import { TFactResult } from '@/libs/types';

export const FormFact: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFactsOrRandom, setIsFactsOrRandom] = useState<
    'facts' | 'random' | string
  >('');

  const { data, setParams } = useGetFacts();
  const { data: dataRandom, setRandomParams } = useGetRandomFact();

  const onSubmit = (event: React.SyntheticEvent) => {
    setIsFactsOrRandom('facts');
    event.preventDefault();
    const { maxLength, limit } = formRef.current as HTMLFormElement;

    setParams({
      maxLength: maxLength.value,
      limit: limit.value,
    });
  };

  const onSubmitRandom = (event: React.SyntheticEvent) => {
    setIsFactsOrRandom('random');
    event.preventDefault();
    const { maxLength } = formRef.current as HTMLFormElement;

    setRandomParams({
      maxLength: maxLength.value,
    });
  };

  return (
    <section className={styles['section-container']}>
      <form ref={formRef} className={styles['form']}>
        <div className={styles['form-container']}>
          <div>
            <label htmlFor="limit">Results Limit</label>
            <input
              type="number"
              id="limit"
              name="limit"
              placeholder="Results Limit"
              min={0}
              defaultValue={5}
            />
          </div>
          <div>
            <label htmlFor="maxLength">Characters</label>
            <input
              type="number"
              id="maxLength"
              name="maxLength"
              placeholder="Characters"
              min={0}
              defaultValue={35}
            />
          </div>
        </div>
        <div className={styles['button-container']}>
          <button
            type="submit"
            onClick={e => onSubmit(e)}
            className={styles['button-submit']}>
            List Facts
          </button>
          <button
            type="submit"
            onClick={e => onSubmitRandom(e)}
            className={styles['button-submit']}>
            Random Fact
          </button>
        </div>
      </form>
      {['random', 'facts'].includes(isFactsOrRandom) && (
        <CardsOrquestator
          data={
            ['random'].includes(isFactsOrRandom)
              ? ([dataRandom] as TFactResult[])
              : data
          }
        />
      )}
    </section>
  );
};

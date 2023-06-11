import { FC, useRef } from 'react';
import { useGetFacts } from '@hooks';
import { CardsOrquestator } from '../cards-orquestator';
import styles from './form-fact.module.css';

export const FormFact: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { data, setParams } = useGetFacts();

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { maxLength, limit } = formRef.current as HTMLFormElement;

    setParams({
      maxLength: maxLength.value,
      limit: limit.value,
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
            <label htmlFor="maxLength">Characters per Fact</label>
            <input
              type="number"
              id="maxLength"
              name="maxLength"
              placeholder="Characters per Fact"
              min={0}
              defaultValue={35}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={e => onSubmit(e)}
          className={styles['button-submit']}>
          Submit
        </button>
      </form>
      {data?.length > 0 && <CardsOrquestator data={data} />}
    </section>
  );
};

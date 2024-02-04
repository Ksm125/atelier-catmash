import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useCounter } from 'usehooks-ts';
import { useGetCats } from '../../hooks/useGetCats';
import { vote } from '../../redux/slices/votesSlice';
import { Poller } from './Poller';
import styles from './polls.module.scss';

export const Polls = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { count, increment } = useCounter();
  const cats = useGetCats();

  const handleSelection = (id: string) => {
    dispatch(vote(id));
    increment();
  };

  return (
    <div className={styles.polls}>
      <p className={styles.polls__title}>{t('msgWhichIsYourFavourite')}</p>
      <div className={styles.polls__content}>
        <Poller key={count} cats={cats} onSelection={handleSelection} />
      </div>
    </div>
  );
};

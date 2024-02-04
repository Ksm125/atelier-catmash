import { useDispatch } from 'react-redux';
import { PollPreview } from '../../components/PollPreview';
import { useGetCats } from '../../hooks/useGetCats';
import { vote } from '../../redux/slices/votesSlice';
import { randomVersusCats } from './polls.const';
import styles from './polls.module.scss';

export const Polls = () => {
  const dispatch = useDispatch();
  const cats = useGetCats();
  const [cat1, cat2] = randomVersusCats(cats);

  const handleSelection = (id: string) => {
    return () => dispatch(vote(id));
  };

  return (
    <div className={styles.polls}>
      <div className={styles.polls__content}>
        <PollPreview {...cat1} onClick={handleSelection(cat1?.id)} />
        <PollPreview {...cat2} onClick={handleSelection(cat2?.id)} />
      </div>
    </div>
  );
};

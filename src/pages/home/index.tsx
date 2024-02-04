import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Preview } from '../../components/Preview';
import { useGetCats } from '../../hooks/useGetCats';
import { selectVotes } from '../../redux/slices/votesSlice';
import { mergeCatsWithVotes } from './home.const';
import styles from './home.module.scss';

export const Home = () => {
  const cats = useGetCats();
  const votesState = useSelector(selectVotes);

  const catsWithVotes = useMemo(
    () => mergeCatsWithVotes(cats, votesState),
    [cats, votesState]
  );

  return (
    <div className={styles.home}>
      <div className={styles.home__content}>
        {/* No need to use virtualization as we only have 100 items */}
        {catsWithVotes.map((cat) => (
          <Preview key={cat.id} {...cat} />
        ))}
      </div>
    </div>
  );
};

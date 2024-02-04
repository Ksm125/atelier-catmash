import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectVotes } from '../../redux/slices/votesSlice';
import { Cat } from '../../schemas/cats';
import styles from './pollPreview.module.scss';

export const PollPreview: FC<PollPreviewProps> = ({
  url,
  id,
  ...restProps
}) => {
  const { t } = useTranslation();
  const votesState = useSelector(selectVotes);

  const likeCount = votesState[id] || 0;

  return (
    <div className={styles.pollPreview__container}>
      <button {...restProps} className={styles.pollPreview}>
        <img src={url} alt={id} className={styles.pollPreview__image} />
      </button>
      <span className={styles.pollPreview__label}>{id}</span>
      <span className={styles.pollPreview__label}>
        {t('txtLike', { count: likeCount })}:  {likeCount}
      </span>
    </div>
  );
};

type PollPreviewProps = React.HTMLAttributes<HTMLButtonElement> & Cat;

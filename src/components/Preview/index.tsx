import { FC } from 'react';
import { Cat } from '../../schemas/cats';
import styles from './preview.module.scss';
import { useTranslation } from 'react-i18next';

export const Preview: FC<PreviewProps> = ({ url, id, votes = 0 , ...restProps }) => {
  const {t} = useTranslation();

  return (
    <div {...restProps} className={styles.preview}>
      <img src={url} alt={id} className={styles.preview__image} />
      <div>
        <p>{t('txtId')}: {id}</p>
        <p>{t('txtVote', {count: votes})}: {votes}</p>
      </div>
    </div>
  );
};

type PreviewProps = React.HTMLAttributes<HTMLDivElement> &
  Cat & {
    votes: number;
  };

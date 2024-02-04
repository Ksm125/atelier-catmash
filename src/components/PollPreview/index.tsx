import { FC } from 'react';
import { Cat } from '../../schemas/cats';
import styles from './pollPreview.module.scss';

export const PollPreview: FC<PollPreviewProps> = ({
  url,
  id,
  ...restProps
}) => {
  return (
    <div className={styles.pollPreview__container}>
      <button {...restProps} className={styles.pollPreview}>
        <img src={url} alt={id} className={styles.pollPreview__image} />
      </button>
      <span className={styles.pollPreview__label}>{id}</span>
    </div>
  );
};

type PollPreviewProps = React.HTMLAttributes<HTMLButtonElement> & Cat;

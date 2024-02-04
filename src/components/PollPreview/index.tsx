import { FC } from 'react';
import { Cat } from '../../schemas/cats';
import styles from './pollPreview.module.scss';

export const PollPreview: FC<PollPreviewProps> = ({
  url,
  id,
  ...restProps
}) => {
  return (
    <button {...restProps} className={styles.pollPreview}>
      <img src={url} alt={id} className={styles.pollPreview__image} />
    </button>
  );
};

type PollPreviewProps = React.HTMLAttributes<HTMLButtonElement> & Cat;

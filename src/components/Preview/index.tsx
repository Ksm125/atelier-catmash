import { FC } from 'react';
import { Cat } from '../../schemas/cats';
import styles from './preview.module.scss';

export const Preview: FC<PreviewProps> = ({ url, id, votes, ...restProps }) => {
  return (
    <div {...restProps} className={styles.preview}>
      <img src={url} alt={id} className={styles.preview__image} />
      <div>
        <p>id: {id}</p>
        <p>votes: {votes}</p>
      </div>
    </div>
  );
};

type PreviewProps = React.HTMLAttributes<HTMLDivElement> &
  Cat & {
    votes: number;
  };

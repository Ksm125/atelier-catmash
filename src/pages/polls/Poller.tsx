import { FC } from 'react';
import { Cat } from 'src/schemas/cats';
import { PollPreview } from '../../components/PollPreview';
import { randomVersusCats } from './polls.const';

export const Poller: FC<PollerProps> = ({ cats, onSelection }) => {
  const [cat1, cat2] = randomVersusCats(cats);

  return (
    <>
      <PollPreview {...cat1} onClick={() => onSelection(cat1?.id)} />
      <PollPreview {...cat2} onClick={() => onSelection(cat2?.id)} />
    </>
  );
};

interface PollerProps {
  cats: Cat[];
  onSelection: (id: string) => void;
}

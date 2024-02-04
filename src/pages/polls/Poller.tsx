import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Cat } from 'src/schemas/cats';
import { PollPreview } from '../../components/PollPreview';
import { randomVersusCats } from './polls.const';

export const Poller: FC<PollerProps> = ({ cats, onSelection }) => {
  const { t } = useTranslation();
  const [cat1, cat2] = useMemo(() => randomVersusCats(cats), [cats]);

  return (
    <>
      <PollPreview {...cat1} onClick={() => onSelection(cat1?.id)} />
      <span>{t('txtOr')}</span>
      <PollPreview {...cat2} onClick={() => onSelection(cat2?.id)} />
    </>
  );
};

interface PollerProps {
  cats: Cat[];
  onSelection: (id: string) => void;
}

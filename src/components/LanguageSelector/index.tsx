import classNames from 'classnames';
import { FC, HtmlHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './language-selector.module.scss';

export const LanguageSelector: FC<LanguageSelectorProps> = (props) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div
      {...props}
      className={classNames(styles.languageSelector, props.className)}
    >
      <button
        className={classNames({
          [styles.languageSelector__active]: currentLanguage === 'en',
        })}
        onClick={() => changeLanguage('en')}
      >
        en
      </button>
      <button
        className={classNames({
          [styles.languageSelector__active]: currentLanguage === 'fr',
        })}
        onClick={() => changeLanguage('fr')}
      >
        fr
      </button>
    </div>
  );
};

type LanguageSelectorProps = HtmlHTMLAttributes<HTMLDivElement>;

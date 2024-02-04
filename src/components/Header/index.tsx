import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>Catmash</h1>
      <nav className={styles.header__nav}>
        <Link to="/">{t('txtHomePage')}</Link>
        <Link to="/polls">{t('txtPoll')}</Link>
      </nav>
    </div>
  );
};

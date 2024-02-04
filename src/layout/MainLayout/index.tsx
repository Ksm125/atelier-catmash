import classnames from 'classnames';
import { FC, HtmlHTMLAttributes } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../components/Header';
import styles from './mainLayout.module.scss';

export const MainLayout: FC<MainLayoutProps> = (props) => {
  return (
    <div {...props} className={classnames(styles.mainLayout, props.className)}>
      <Header />
      <Outlet />
    </div>
  );
};

type MainLayoutProps = HtmlHTMLAttributes<HTMLDivElement>;

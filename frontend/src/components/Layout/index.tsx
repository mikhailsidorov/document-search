import { Fragment, FC, ReactNode } from 'react';

import { NavigationLink } from './NavigationLink';

export interface LayoutProps {
  children?: ReactNode
};

export const Layout:FC<LayoutProps>  = ({ children }) => {
  return (
    <Fragment>
      <nav className="navbar is-dark">
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavigationLink exact={true} className="navbar-item" to="/documents">Поиск документов</NavigationLink>
            <NavigationLink className="navbar-item" to="/documents/create">Создать документ</NavigationLink>
          </div>
        </div>
      </nav>
      <section className="section">{ children }</section>
    </Fragment>
  );
};

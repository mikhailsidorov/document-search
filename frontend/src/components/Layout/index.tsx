import { Fragment, FC } from 'react';

export interface LayoutProps {
  children?: JSX.Element | String
};

export const Layout:FC<LayoutProps>  = ({ children }) => {
  return (
    <Fragment>
      <nav className="navbar is-dark">
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-active" href="/">Создать документ</a>
            <a className="navbar-item" href="/">Поиск документов</a>
          </div>
        </div>
      </nav>
      <main>{ children }</main>
    </Fragment>
  );
};

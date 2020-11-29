import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavigationLinkProps {
  children?: ReactNode,
  className?: string,
  to: string
  exact?: boolean
};

export const NavigationLink:FC<NavigationLinkProps> = ({ children, ...props }) => {
  return <NavLink {...props} activeClassName="is-active">{ children }</NavLink>;
};

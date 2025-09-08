import {  Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className="logo">
          <Link to="/">MyLogo</Link>
        </div>
        <nav className="nav">
          <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
        >
          Home
        </NavLink>
          <NavLink
             to="/catalog"
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
          >
           Catalog
          </NavLink>
        </nav>
    </header>
  );
}
import { Link, NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import css from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/"
  return (
    <header className={clsx(css.header, { [css.home]: isHomePage, [css.other]: !isHomePage })}>
      <div className={css.wrapper}>
      <div >
        <Link to="/" className={css.logo}>
          <svg
            width="120"
            height="16"
          >
            <use href="/sprite.svg#icon-Logo"></use>
          </svg>
        </Link>
      </div>
      <nav className={css.nav}>
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
      </div>
    </header>
  );
}

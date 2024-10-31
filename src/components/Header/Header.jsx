import { NavLink } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.logoContainer}>
                <svg className={css.logo}>
          <use xlinkHref={`${sprite}#icon-logo`}></use>
                        </svg>
                        <h3 className={css.logoHeader}>read journey</h3>
</div>
      <nav className={css.navWrapper}>
        <NavLink to="recommended" className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ''}`}>
          Home
        </NavLink>
        <NavLink to="library" className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ''}`}>
          Library
        </NavLink>
        
      </nav>

      <div className={css.buttonWrapper}>
        <div className={css.userBarWrapper}>
        <button className={css.userBarBtn} type='button'>U</button>
        <p className={css.userName}>User Name</p></div>
        <button className={css.logOutBtn} type='button'>Log out</button>
      </div>
    </div>
  );
};


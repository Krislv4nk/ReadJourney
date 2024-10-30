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
        <NavLink to="recommended" className={css.link}>
          Home
        </NavLink>
        <NavLink to="library" className={css.link}>
          Library
        </NavLink>
        
      </nav>

      <div className={css.buttonWrapper}>
        <button className={css.userButton} type='button'><span className={css.avatarBorder}>U</span><span className={css.userName}>User Name</span></button>
        <button className={css.logOutBtn} type='button'>Log out</button>
      </div>
    </div>
  );
};


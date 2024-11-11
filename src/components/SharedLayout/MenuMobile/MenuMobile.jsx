

import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons/sprite.svg';
import css from './MenuMobile.module.css';

export const MenuMobile = ({onClose}) => {


   

    return (
        <div className={css.wrapper}>
            <button className={css.btnClose} onClick={onClose} title='Close window' type='button'>
        <svg className={css.iconClose}>
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <div className={css.menuWrapper}>
      <nav className={css.navWrapper}>
        <NavLink to="/recommended" className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ''}`}>
          Home
        </NavLink>
        <NavLink to="/library" className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ''}`}>
        My Library
        </NavLink> 
      </nav>
        <button className={css.logOutBtn} type='button'>Log out</button>
        </div>
        </div>
    )
}
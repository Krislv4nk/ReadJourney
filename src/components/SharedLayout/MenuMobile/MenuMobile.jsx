
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { SignOutModal } from '../../Auth/SignOutModal/SignOutModal';
import sprite from '../../../assets/icons/sprite.svg';
import css from './MenuMobile.module.css';

export const MenuMobile = ({onClose}) => {
  const [openSignOutModal, setOpenSignOutModal] = useState(false);
 

  const openSignOutModalHandler = () => {
    setOpenSignOutModal(true);

  };

  const closeModalHandler = () => {
    setOpenSignOutModal(false);
  };

   

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
        <button onClick={openSignOutModalHandler} className={css.logOutBtn} type='button' title='Sign out'>Sign out</button>
        <StyledEngineProvider injectFirst>
        <Dialog open={openSignOutModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <SignOutModal onClose={closeModalHandler} />} />
      </StyledEngineProvider>
        </div>
        </div>
    )
}
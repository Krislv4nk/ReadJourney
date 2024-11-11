
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import { SignOutModal } from '../../Auth/SignOutModal/SignOutModal';
import sprite from '../../../assets/icons/sprite.svg';
import css from './Header.module.css';

export const Header = () => {

  const [openMenuMob, setOpenMenuMob] = useState(false);
  const [openSignOutModal, setOpenSignOutModal] = useState(false);
 

  const openSignOutModalHandler = () => {
    setOpenSignOutModal(true);

  };

  const closeModalHandler = () => {
    setOpenSignOutModal(false);
  };


  const handleOpenClick = () => {
    setOpenMenuMob(true);
  };
  
  const handleCloseClick = () => {
    setOpenMenuMob(false);
  };
  return (
    <div className={css.wrapper}>
      <div className={css.logoContainer}>
                <svg className={css.logo}>
          <use xlinkHref={`${sprite}#icon-logo`}></use>
                        </svg>
                        <h3 className={css.logoHeader}>read journey</h3>
</div>
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

      <div className={css.buttonWrapper}>
        <div className={css.userBarWrapper}>
        <button className={css.userBarBtn} type='button'>U</button>
        <p className={css.userName}>User Name</p></div>


        <button className={css.logOutBtn} onClick={openSignOutModalHandler} type='button' title='Sign out'>Sign out</button>
        <StyledEngineProvider injectFirst>
        <Dialog open={openSignOutModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <SignOutModal onClose={closeModalHandler} />} />
      </StyledEngineProvider>


        <button className={css.userMenu} onClick={handleOpenClick} title='Menu' type='button'><svg className={css.userMenuIcon}>
          <use xlinkHref={`${sprite}#icon-menu`}></use>
                        </svg></button>
<StyledEngineProvider injectFirst>
        <Dialog open={openMenuMob} onClose={handleCloseClick} className={css.backdropNone}
          PaperComponent={() => <MenuMobile onClose={handleCloseClick} />} />
      </StyledEngineProvider>
      </div>
    </div>
  );
};


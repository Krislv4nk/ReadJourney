import {  NavLink } from 'react-router-dom';

export const Header = () => {

  return (
    <div>
      <nav>
        
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/library">
          Library
        </NavLink>
        <NavLink to="/auth">
          AuthPage
        </NavLink>
      </nav>
    </div>
  );
};

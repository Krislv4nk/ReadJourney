import {  NavLink } from 'react-router-dom';

export const Header = () => {

  return (
    <div>
      <nav>
        <NavLink to="/first">
          
          First
        </NavLink>
        <NavLink to="/second">
          
          Second
        </NavLink>
      </nav>
    </div>
  );
};

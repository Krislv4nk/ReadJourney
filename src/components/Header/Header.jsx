import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="recommended" end>
          Home
        </NavLink>
        <NavLink to="library">
          Library
        </NavLink>
        {/* <NavLink to="signUp" aria-label="Sign Up">
          SignUpPage
        </NavLink>
        <NavLink to="signIn" aria-label="Sign In">
          SignInPage
        </NavLink>
        <NavLink to="forgot-password" aria-label="Forgot Password">
          Forgot Password
        </NavLink>
        <NavLink to="forgot-password/:token" aria-label="Recover Password">
          Recover Password
        </NavLink> */}
      </nav>
    </div>
  );
};


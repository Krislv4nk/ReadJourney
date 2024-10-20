import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" aria-label="Home">
          Home
        </NavLink>
        <NavLink to="/library" aria-label="Library">
          Library
        </NavLink>
        <NavLink to="/signUp" aria-label="Sign Up">
          SignUpPage
        </NavLink>
        <NavLink to="/signIn" aria-label="Sign In">
          SignInPage
        </NavLink>
        <NavLink to="/forgot-password" aria-label="Forgot Password">
          Forgot Password
        </NavLink>
        <NavLink to="/forgot-password/:token" aria-label="Recover Password">
          Recover Password
        </NavLink>
      </nav>
    </div>
  );
};


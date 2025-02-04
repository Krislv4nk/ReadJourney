


import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { successToast } from '../../helpers/services';

import { AuthBackground } from "../../components/Auth/AuthBackground/AuthBackground";
import css from './Auth.module.css';

const VerifyEmailPage = () => {
  useEffect(() => {
    successToast('Email has been successfully verified! You can sign in to your account!');
  }, []);

  return (
    <>
      <AuthBackground />
      <div className={css.verifyWrapper}>
      <h5 className={css.verifyTitle}>Email has been successfully verified! <br/>
        <span className={css.verifyTitleAccent}>Now you can <NavLink to="/signIn" className={css.verifyLink}>Sign in</NavLink>.</span></h5>
      </div>
    </>
  );
};

export default VerifyEmailPage;










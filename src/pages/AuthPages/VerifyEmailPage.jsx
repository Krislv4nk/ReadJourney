

import {useEffect} from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyEmail } from '../../redux/auth/operations'; 

import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/Auth/AuthBackground/AuthBackground";
import { successToast } from '../../helpers/services';
import css from './Auth.module.css';

const VerifyEmailPage = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyEmail(token)).then(() => {
      successToast('Email has been successfully verified! You can sign in to your account!');
      navigate('/signIn');
    }).catch(() => {
      navigate('/error');
    });
  }, [dispatch, token, navigate]);

  return (
    <Container>
      <AuthBackground />
      <h3 className={css.verifyHeader}>Email has been successfully verified!</h3>
       <NavLink to="/signIn" aria-label="Sign In">You can sign in to your account</NavLink>
    </Container>
  );
};

export default VerifyEmailPage;

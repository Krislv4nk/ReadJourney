

import {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyEmail } from '../../redux/auth/operations'; 

import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/AuthBackground/AuthBackground";
import { successToast} from '../../helpers/services';

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
      <h1>Email has been successfully verified!</h1>
      <p>You can sign in to your account</p>
    </Container>
  );
};

export default VerifyEmailPage;

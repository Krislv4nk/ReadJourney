

import {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyEmail } from '../../redux/auth/operations'; 

const VerifyEmailPage = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyEmail(token)).then(() => {
      navigate('/signIn');
    }).catch(() => {
      navigate('/error');
    });
  }, [dispatch, token, navigate]);

  return (
    <div>
      <h1>Email has been successfully verified!</h1>
      <p>You can sign in to your account</p>
    </div>
  );
};

export default VerifyEmailPage;

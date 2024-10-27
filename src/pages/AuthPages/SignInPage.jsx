import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signinUser } from '../../redux/auth/operations';
import { selectAuthIsSignedIn } from '../../redux/auth/selectors';

import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";


const SignInPage = () => {

 const dispatch = useDispatch();
  const navigate = useNavigate();

    
  const isAuthenticated = useSelector(selectAuthIsSignedIn);

  
  useEffect(() => {
    if (isAuthenticated) {
       console.log('isAuthenticated:', isAuthenticated);
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleAuthSubmit =  (formData) => {
     try {
     dispatch(signinUser(formData));
    } catch (error) {
      console.error('Login failed:', error);
      
    }
  };

  
  return (
    <Container>
      <AuthBackground />
      <AuthForm isSignUp={false} isForgotPassword={false} isRecoverPassword={false} onSubmit={handleAuthSubmit}/>
      </Container>
  );
};

export default SignInPage;
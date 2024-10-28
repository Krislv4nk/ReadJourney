
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signinUser } from '../../redux/auth/operations';
import { selectAuthIsSignedIn } from '../../redux/auth/selectors';

import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";


const SignInPage = () => {

 const dispatch = useDispatch();

    
 const isAuthenticated = useSelector(selectAuthIsSignedIn);

  const handleAuthSubmit = (formData) => {
    dispatch(signinUser(formData));
  };

 
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  
  return (
    <Container>
      <AuthBackground />
      <AuthForm isSignUp={false} isForgotPassword={false} isRecoverPassword={false} onSubmit={handleAuthSubmit}/>
      </Container>
  );
};

export default SignInPage;
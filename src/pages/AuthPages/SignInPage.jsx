
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signinUser } from '../../redux/auth/operations';
import { selectAuthIsSignedIn } from '../../redux/auth/selectors';

import Container from "../../components/SharedLayout/Container/Container";
import { AuthBackground } from "../../components/Auth/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/Auth/AuthForm/AuthForm";

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const isSignedIn = useSelector(selectAuthIsSignedIn);

  const handleAuthSubmit = (formData) => {
    dispatch(signinUser(formData))
      .unwrap()
      .then(() => {
        
        console.log("User signed in:", isSignedIn);
        
        if (isSignedIn) {
          navigate('/recommended');
        }
      })
      .catch((error) => {
        console.error("Sign in error:", error);
      });
  };

  return (
    <Container>
      <AuthBackground />
      <AuthForm isSignUp={false} isForgotPassword={false} isRecoverPassword={false} onSubmit={handleAuthSubmit} />
    </Container>
  );
};

export default SignInPage;

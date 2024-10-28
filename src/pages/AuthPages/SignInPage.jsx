
import { useDispatch } from 'react-redux';
import { signinUser } from '../../redux/auth/operations';

import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";


const SignInPage = () => {

 const dispatch = useDispatch();
  const handleAuthSubmit = (formData) => {
    dispatch(signinUser(formData));
  };

  return (
    <Container>
      <AuthBackground />
      <AuthForm isSignUp={false} isForgotPassword={false} isRecoverPassword={false} onSubmit={handleAuthSubmit}/>
      </Container>
  );
};

export default SignInPage;
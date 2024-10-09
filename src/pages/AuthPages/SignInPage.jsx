import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";


const SignInPage = () => {
  
  return (
    <Container>
        <h2>SignInPage</h2>
      <AuthBackground />
      <AuthForm isSignUp={false} isForgotPassword={false} isRecoverPassword={false}/>
      </Container>
  );
};

export default SignInPage;
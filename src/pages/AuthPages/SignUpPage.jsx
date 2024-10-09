
import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";

const SignUpPage = () => {
  const isSignUp = true;
  return (
    
      <Container>
      <AuthBackground />
      <AuthForm isSignUp={isSignUp}/>
      </Container>
    
  );
};

export default SignUpPage;

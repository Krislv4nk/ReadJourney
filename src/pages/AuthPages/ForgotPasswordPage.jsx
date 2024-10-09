import Container from "../../components/Container/Container";
import {AuthBackground} from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";


const ForgotPasswordPage = () => {
  const isForgotPassword = true;
  return (
    <Container>
        <h2>ForgotPasswordPage</h2>
      <AuthBackground />
      <AuthForm isForgotPassword={isForgotPassword}/>
      </Container>
  );
};

export default ForgotPasswordPage;
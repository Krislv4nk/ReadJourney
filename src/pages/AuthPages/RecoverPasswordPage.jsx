
import Container from "../../components/Container/Container";
import {AuthBackground} from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";

const RecoverPasswordPage = () => {
  const isRecoverPassword = true
  return (
    <Container>
        <h2>RecoverPasswordPage</h2>
      <AuthBackground />
      <AuthForm isRecoverPassword={isRecoverPassword}/>
      </Container>
  );
};

export default RecoverPasswordPage;
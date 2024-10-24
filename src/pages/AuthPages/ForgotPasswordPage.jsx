
import { useDispatch } from 'react-redux';
import { errorToast, successToast } from '../../helpers/services';
import { forgotPassword } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

import Container from "../../components/Container/Container";
import {AuthBackground} from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";


const ForgotPasswordPage = () => {
  const isForgotPassword = true;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAuthSubmit = formData => {
    dispatch(forgotPassword(formData))
    .unwrap()
    .then(() => {
      successToast('Password sent');
      navigate('/signIn');
    })
    .catch(error => {
      errorToast(error);
    });
  };
  return (
    <Container>
      <AuthBackground />
      <AuthForm isForgotPassword={isForgotPassword} onSubmit={handleAuthSubmit}/>
      </Container>
  );
};

export default ForgotPasswordPage;
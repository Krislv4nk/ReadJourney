
import { useDispatch } from 'react-redux';
import { errorToast, successToast } from '../../helpers/services';
import { recoverPassword } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Container from "../../components/Container/Container";
import {AuthBackground} from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";

const RecoverPasswordPage = () => {
  const isRecoverPassword = true
 const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  const handleAuthSubmit = formData => {
    dispatch(recoverPassword({...formData, token}))
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

      <AuthForm isRecoverPassword={isRecoverPassword} onSubmit={handleAuthSubmit}/>
      </Container>
  );
};

export default RecoverPasswordPage;
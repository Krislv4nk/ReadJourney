
import { useDispatch } from 'react-redux';
import { errorToast, successToast } from '../../helpers/services';
import { forgotPassword } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

import {AuthBackground} from "../../components/Auth/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/Auth/AuthForm/AuthForm";


const ForgotPasswordPage = () => {
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
    <>
      <AuthBackground />
      <AuthForm isForgotPassword={true} onSubmit={handleAuthSubmit}/>
      </>
  );
};

export default ForgotPasswordPage;
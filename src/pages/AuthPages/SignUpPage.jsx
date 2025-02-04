
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../redux/auth/operations';
import {selectAuthVerified} from '../../redux/auth/selectors.js';
import { successToast, errorToast} from '../../helpers/services';


import { AuthBackground } from "../../components/Auth/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/Auth/AuthForm/AuthForm";


const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVerified = useSelector(selectAuthVerified);
  
  const handleAuthSubmit = formData => {
    dispatch(signupUser(formData))
      .unwrap()
      .then(() => {
        
  successToast('Registration successful! Please, confirm email for verification!');
        if (isVerified) {
          navigate('/signIn');
        }
      })
      .catch(error => {
        console.error(error);
        errorToast(error);
      });
  };
  return (
    
      <>
      <AuthBackground />
      <AuthForm  onSubmit={handleAuthSubmit} isSignUp={true}/>
      </>
    
  );
};

export default SignUpPage;


import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/auth/operations';
import { successToast, errorToast} from '../../helpers/services';


import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";


const SignUpPage = () => {
  const isSignUp = true;
  const dispatch = useDispatch();
  
  const handleAuthSubmit = formData => {
    dispatch(signupUser(formData))
      .unwrap()
      .then(() => {
        successToast('Registration Successful');
      })
      .catch(error => {
        errorToast(error);
      });
  };
  return (
    
      <Container>
      <AuthBackground />
      <AuthForm isSignUp={isSignUp} onSubmit={handleAuthSubmit}/>
      </Container>
    
  );
};

export default SignUpPage;

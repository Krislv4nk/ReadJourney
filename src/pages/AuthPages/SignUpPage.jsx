
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/auth/operations';
import { successToast, errorToast} from '../../helpers/services';


import Container from "../../components/SharedLayout/Container/Container";
import { AuthBackground } from "../../components/Auth/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/Auth/AuthForm/AuthForm";


const SignUpPage = () => {
  const dispatch = useDispatch();
  
  const handleAuthSubmit = formData => {
    dispatch(signupUser(formData))
      .unwrap()
      .then(() => {
  successToast('Registration successful! Please, confirm email for verification!');
        
      })
      .catch(error => {
        errorToast(error);
      });
  };
  return (
    
      <Container>
      <AuthBackground />
      <AuthForm  onSubmit={handleAuthSubmit} isSignUp={true}/>
      </Container>
    
  );
};

export default SignUpPage;

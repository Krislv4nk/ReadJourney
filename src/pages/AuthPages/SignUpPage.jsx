
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/auth/operations';
import { successToast, errorToast} from '../../helpers/services';


import Container from "../../components/Container/Container";
import { AuthBackground } from "../../components/AuthBackground/AuthBackground";
import { AuthForm } from "../../components/AuthForm/AuthForm";


const SignUpPage = () => {
  const dispatch = useDispatch();
  
  const handleAuthSubmit = formData => {
    dispatch(signupUser(formData))
      .unwrap()
      .then(() => {
  successToast('Registration successful!');
        
      })
      .catch(error => {
        console.log('Error:', error);
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

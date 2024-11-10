// import { useEffect } from 'react';
// import { useParams, useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { verifyUser } from '../../redux/auth/operations';
// import { selectAuthVerified } from '../../redux/auth/selectors'; // Імпортуйте селектор
// import Container from "../../components/SharedLayout/Container/Container";
// import { AuthBackground } from "../../components/Auth/AuthBackground/AuthBackground";
// import css from './Auth.module.css';

// const VerifyEmailPage = () => {
//   const { token } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Використовуємо селектор для отримання статусу верифікації
//   const isVerified = useSelector(selectAuthVerified);

//   useEffect(() => {
//     const handleVerify = async () => {
//       try {
//         await dispatch(verifyUser(token)).unwrap(); // Виклик верифікації
//         // статус верифікації оновлюється автоматично в Redux
//       } catch (error) {
//         console.error('Verification failed:', error);
//         navigate('/error'); // Перенаправлення на сторінку помилки
//       }
//     };

//     handleVerify();
//   }, [dispatch, token, navigate]);

//   return (
//     <Container>
//       <AuthBackground />
//       {isVerified ? ( // Показуємо результат верифікації
//         <h3 className={css.verifyHeader}>Email has been successfully verified!</h3>
//       ) : (
//         <h3 className={css.verifyHeader}>Verifying your email...</h3>
//       )}
//       {isVerified && (
//         <NavLink to="/signIn" aria-label="Sign In">You can sign in to your account</NavLink>
//       )}
//     </Container>
//   );
// };

// export default VerifyEmailPage;




import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthVerified } from '../../redux/auth/selectors';
import { successToast } from '../../helpers/services';

import Container from "../../components/SharedLayout/Container/Container";
import { AuthBackground } from "../../components/Auth/AuthBackground/AuthBackground";
import CircularProgressWithLabel from "../../components/SharedLayout/CircularProgressWithLabel/CircularProgressWithLabel";
import css from './Auth.module.css';

const VerifyEmailPage = () => {
  const navigate = useNavigate(); 
  const isVerified = useSelector(selectAuthVerified);

  useEffect(() => {
    if (isVerified) {
      successToast('Email has been successfully verified! You can sign in to your account!');
    } else {
      navigate('/error');
    }
  }, [isVerified, navigate]);

  return (
    <Container>
      <AuthBackground />
      {isVerified ? (
        <>
        <h3 className={css.verifyHeader}>Email has been successfully verified!</h3>
      </>
      ) : (

       <>
       <CircularProgressWithLabel />
        <p>Verifying...</p>
        </>
      )}
    </Container>
  );
};

export default VerifyEmailPage;









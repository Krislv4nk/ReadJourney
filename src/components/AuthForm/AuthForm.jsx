
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from './../../assets/icons/sprite.svg';
import css from './AuthForm.module.css';

export const AuthForm = ({ onSubmit, isSignUp, isForgotPassword, isRecoverPassword }) => {
  const navigate = useNavigate();
  const [lookPassword, setLookPassword] = useState(false);

  const initialValues = {
    username: '', 
    email: '',
    password: '',
  };

  const getValidationSchema = (isSignUp, isForgotPassword, isRecoverPassword) => 
  Yup.object().shape({
    username: isSignUp
      ? Yup.string().required('Name is required')
      : Yup.string().nullable(),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: !isForgotPassword || isRecoverPassword
      ? Yup.string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters')
      : Yup.string().notRequired(),
  });



  const handleAuthSubmit = async (values, { setSubmitting }) => {
  
  try {
    await onSubmit(values);
    setSubmitting(false);
    if (isSignUp || isRecoverPassword) {
      navigate('/signIn'); 
    } 
  } catch (error) {
    console.error('Error:', error);
    setSubmitting(false);
  }
};

  const passwordVisible = () => {
    setLookPassword(prev => !prev);
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={initialValues}
  validationSchema={getValidationSchema(isSignUp, isForgotPassword, isRecoverPassword)} 
  onSubmit={handleAuthSubmit}
      >
        
          <Form className={css.form}>
            {isSignUp && (
            <div className={css.inputContainer}>
              <label className={css.label} htmlFor="username">Name:</label>
              <Field type="text" name="username" className={css.field} placeholder="YourName" autoComplete="name"/>
              <ErrorMessage name="username" component="div" className={css.error} />
              </div>
            )}
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor="email">Mail:</label>
              <Field
                type="email"
                name="email"
                className={css.field}
                placeholder="Your@mail.com"
                autoComplete="email"
            />
              <ErrorMessage className={css.error} name="email" component="div" />
            </div>
            {(!isForgotPassword || isRecoverPassword) && (
            <div className={css.inputContainer}>
              <label className={css.label} htmlFor="password">Password:</label>
                <Field
                  type={lookPassword ? 'text' : 'password'}
                  placeholder="Yourpasswordhere"
                  className={css.field}
                  name="password"
                  autoComplete="password"
                />
                <button type="button" className={css.passwordBtn} onClick={passwordVisible} title='Password visible'>
                  <svg className={css.passwordIcon}>
                    <use href={`${sprite}#icon-${lookPassword ? 'eye' : 'eye-off'}`} />
                  </svg>
              </button>
                <ErrorMessage className={css.error} name="password" component="div" />
              </div>
          )}
          <div className={css.linkWrapper}>
            <button className={css.formBtn} type="submit">
              {isSignUp ? 'Sign Up' : isForgotPassword ? 'Reset' : isRecoverPassword ? 'Recover Password' : 'Sign In'}
            </button>

            <div className={css.linksContainer}>
              {!isSignUp && !isForgotPassword && !isRecoverPassword && (
                <Link to="/signUp" className={css.link}>
                  Do not have an account?<br/>
                </Link>
              )}
              {isSignUp && (
                <Link to="/signIn" className={css.link}>
                  Already have an account?<br/>
                </Link>
              )}
              {!isForgotPassword && !isRecoverPassword && (
                <Link to="/forgot-password" className={css.link}>
                  Forgot Password?
                </Link>
              )}
            </div>
            </div>
          </Form>
      </Formik>
    </div>
  );
};
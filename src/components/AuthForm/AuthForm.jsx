
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
    name: isSignUp ? '' : '', 
    mail: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
  ...(isSignUp && {
    name: Yup.string().required('Name is required'),
  }),
  mail: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().when([], {
    is: () => !isForgotPassword || isRecoverPassword,
    then: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    otherwise: Yup.string().notRequired(),
  }),
});

  const handleSubmit = async (values, { setSubmitting }) => {
  try {
    await onSubmit(values);
    setSubmitting(false);
    if (isSignUp || isRecoverPassword) {
      navigate('/signin'); 
    } else {
      navigate('/home'); 
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
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        
          <Form className={css.form}>
            {isSignUp && (
              <div className={css.passwordContainer}>
              <Field type="text" name="name" className={css.field} placeholder=" " autoComplete="name" />
               <label className={css.label} htmlFor="name">Name: <span>YourName</span></label>
                <ErrorMessage name="name" component="div" />
              </div>
            )}
            <div className={css.passwordContainer}>
              <Field
                type="email"
                name="mail"
                className={css.field}
                placeholder=" "
                autoComplete="email"
            />
            <label className={css.label} htmlFor="mail">Mail: <span>Your@email.com</span></label>
              <ErrorMessage name="mail" component="div" />
            </div>
            {(!isForgotPassword || isRecoverPassword) && (
              <div className={css.passwordContainer}>
                <Field
                  type={lookPassword ? 'text' : 'password'}
                  placeholder=" "
                  className={css.field}
                  name="password"
                  autoComplete="password"
                />
                <button type="button" className={css.passwordBtn} onClick={passwordVisible}>
                  <svg className={css.passwordIcon}>
                    <use href={`${sprite}#icon-${lookPassword ? 'eye' : 'eye-off'}`} />
                  </svg>
              </button>
              <label className={css.label} htmlFor="password">Password: <span>Yourpasswordhere</span></label>
                <ErrorMessage name="password" component="div" />
              </div>
          )}
          <div className={css.linkWrapper}>
            <button className={css.formBtn} type="submit">
              {isSignUp ? 'Sign Up' : isForgotPassword ? 'Reset' : isRecoverPassword ? 'Recover Password' : 'Signin'}
            </button>

            <div className={css.linksContainer}>
              {!isSignUp && !isForgotPassword && !isRecoverPassword && (
                <Link to="/signup" className={css.link}>
                  Do not have an account?<br/>
                </Link>
              )}
              {isSignUp && (
                <Link to="/signin" className={css.link}>
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

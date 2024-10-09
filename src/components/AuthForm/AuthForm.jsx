
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import icons from './../../assets/icons/sprite.svg';
import css from './AuthForm.module.css';

export const AuthForm = ({ onSubmit, isSignUp, isForgotPassword, isRecoverPassword }) => {
  const navigate = useNavigate();
  const [lookPassword, setLookPassword] = useState(false);

  const initialValues = {
    name: isSignUp ? '' : undefined, 
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    ...(isSignUp && {
      name: Yup.string().required('Name is required'),
    }),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().when('isRecoverPassword', {
      is: true,
      then: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
      otherwise: Yup.string().notRequired(), 
    }),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await onSubmit(values);
      setSubmitting(false);
      if (isForgotPassword) {
        // Redirect or show a success message
      } else if (!isRecoverPassword) {
        navigate('/home'); // Redirect to home after login
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
        {({ errors, touched }) => (
          <Form>
            {isSignUp && (
              <div>
                <label className={css.label} htmlFor="name">Name</label>
                <Field type="text" name="name" className={css.field} placeholder="Name" autoComplete="name" />
                <ErrorMessage name="name" component="div" />
              </div>
            )}
            <div>
              <label className={css.label} htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className={css.field}
                placeholder="Email"
                              autoComplete="email"
                              errors={errors ? errors.password : undefined}
            touched={touched.password ? 'true' : 'false'}
              />
              <ErrorMessage name="email" component="div" />
            </div>
            {(!isForgotPassword || isRecoverPassword) && (
              <div className={css.passwordContainer}>
                <label className={css.label} htmlFor="password">Password</label>
                <Field
                  type={lookPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={css.field}
                  name="password"
                  autoComplete="password"
                />
                <button type="button" className={css.passwordBtn} onClick={passwordVisible}>
                  <svg className={css.passwordIcon}>
                    <use href={`${icons}#icon-${lookPassword ? 'eye' : 'eye-off'}`} />
                  </svg>
                </button>
                <ErrorMessage name="password" component="div" />
              </div>
            )}
            <button className={css.formBtn} type="submit">
  {isSignUp ? 'Sign Up' : isForgotPassword ? 'Send Reset Link' : isRecoverPassword ? 'Recover Password' : 'Login'}
</button>

<div className={css.linksContainer}>
  {!isSignUp && !isForgotPassword && !isRecoverPassword && (
    <Link to="/signup" className={css.link}>
      Do not have an account? Sign up
    </Link>
  )}

  {isSignUp && (
    <Link to="/login" className={css.link}>
      Already have an account? Login
    </Link>
  )}

  {!isForgotPassword && !isRecoverPassword && (
    <Link to="/forgot-password" className={css.link}>
      Forgot Password?
    </Link>
  )}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

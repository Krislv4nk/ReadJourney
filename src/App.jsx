import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectAuthIsRefreshing } from './redux/auth/selectors';
import  '../src/helpers/i18n';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import SignUpPage from 'pages/AuthPages/SignUpPage';
import SignInPage from 'pages/AuthPages/SignInPage';
import ForgotPasswordPage from 'pages/AuthPages/ForgotPasswordPage';
import RecoverPasswordPage from 'pages/AuthPages/RecoverPasswordPage';
import HomePage from 'pages/HomePage/HomePage';
import LibraryPage from 'pages/LibraryPage/LibraryPage';
import VerifyEmailPage from 'pages/AuthPages/VerifyEmailPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import CircularProgressWithLabel from './components/CircularProgressWithLabel/CircularProgressWithLabel';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isFetchingCurrentUser) {
    return <CircularProgressWithLabel/>; 
  }

  return (
    <Routes>

      <Route path="/" element={<SharedLayout />}>
        
<Route index element={<PublicRoute><SignUpPage /></PublicRoute>} />
      <Route path="/signIn" element={<PublicRoute><SignInPage /></PublicRoute>} />
      <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />
      <Route path="/users/verify/:token" element={<PublicRoute><VerifyEmailPage /></PublicRoute>} />
        <Route path="/forgot-password/:token" element={<PublicRoute><RecoverPasswordPage /></PublicRoute>} />

        <Route path='/home' element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/library" element={<PrivateRoute><LibraryPage /></PrivateRoute>} />
      </Route>


      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;


//  <Route path='home' element={<HomePage />} />
//        <Route path="library" element={<LibraryPage />} />
// kris.lv4nk00@gmail.com
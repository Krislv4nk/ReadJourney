import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectAuthIsRefreshing } from './redux/auth/selectors';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import SignUpPage from 'pages/AuthPages/SignUpPage';
import SignInPage from 'pages/AuthPages/SignInPage';
import ForgotPasswordPage from 'pages/AuthPages/ForgotPasswordPage';
import RecoverPasswordPage from 'pages/AuthPages/RecoverPasswordPage';
import HomePage from 'pages/HomePage/HomePage';
import LibraryPage from 'pages/LibraryPage/LibraryPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isFetchingCurrentUser) {
    return <p>Loading...</p>; 
  }

  return (
    <Routes>
      <Route path="/signup" element={<PublicRoute><SignUpPage /></PublicRoute>} />
      <Route path="/signin" element={<PublicRoute><SignInPage /></PublicRoute>} />
      <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />
      <Route path="/forgot-password/:token" element={<PublicRoute><RecoverPasswordPage /></PublicRoute>} />
      <Route path="/" element={<PrivateRoute><SharedLayout /></PrivateRoute>}>
        <Route index element={<HomePage />} />
        <Route path="library" element={<LibraryPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;




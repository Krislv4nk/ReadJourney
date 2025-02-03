// bug with redirection




import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectAuthIsRefreshing } from './redux/auth/selectors';
import  '../src/helpers/i18n';

import SharedLayout from './components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from './pages/AuthPages/SignUpPage';
import SignInPage from './pages/AuthPages/SignInPage';
import ForgotPasswordPage from './pages/AuthPages/ForgotPasswordPage';
import RecoverPasswordPage from './pages/AuthPages/RecoverPasswordPage';
import RecommendedPage from './pages/RecommendedPage/RecommendedPage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import ReadingPage from './pages/ReadingPage/ReadingPage';
import VerifyEmailPage from './pages/AuthPages/VerifyEmailPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import PrivateRoute from 'components//Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute/PublicRoute';
import CircularProgressWithLabel from './components/SharedLayout/CircularProgressWithLabel/CircularProgressWithLabel';

// import.meta.env.VITE_BASE_URL;

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
{/* <Route index element={<WelcomePage />} />
<Route path="/signUp"  element={<SignUpPage />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/users/verify/success" element={<VerifyEmailPage />} />
        <Route path="/forgot-password/:token" element={<RecoverPasswordPage />} />

<Route path="/" element={<SharedLayout />}>
<Route path='/recommended' element={<RecommendedPage />} />
<Route path="/library" element={<LibraryPage />} />
        <Route path="/reading" element={<ReadingPage />} /> */}
        
        <Route index element={<WelcomePage />} />
<Route path="/signUp"  element={<PublicRoute><SignUpPage /></PublicRoute>} />
      <Route path="/signIn" element={<PublicRoute><SignInPage /></PublicRoute>} />
      <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />
      <Route path="/users/verify/success" element={<PublicRoute><VerifyEmailPage /></PublicRoute>} />
        <Route path="/forgot-password/:token" element={<PublicRoute><RecoverPasswordPage /></PublicRoute>} /> 
        <Route path="/" element={<SharedLayout />}>
<Route path='/recommended' element={<PrivateRoute><RecommendedPage /></PrivateRoute>} />
        <Route path="/library" element={<PrivateRoute><LibraryPage /></PrivateRoute>} /> 
        <Route path= "/reading" element={<PrivateRoute><ReadingPage/></PrivateRoute>}/>
        </Route>

      <Route path="*" element={<ErrorPage />} /> 
    </Routes>
  );
}

export default App;



// kris.lv4nk00@gmail.com
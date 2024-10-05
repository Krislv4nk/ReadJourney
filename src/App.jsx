import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import LibraryPage from 'pages/LibraryPage/LibraryPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import {PrivateRoute} from 'components/PrivateRoute/PrivateRoute';

function App() {
 const isAuthenticated = false; 

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SharedLayout />}/>}>
        <Route index element={<HomePage />} />
        <Route path="library" element={<LibraryPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}


export default App;



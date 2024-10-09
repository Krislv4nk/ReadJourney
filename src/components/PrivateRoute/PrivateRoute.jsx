
import { selectAuthIsSignedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/signup' }) => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  return isSignedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

import { selectAuthIsSignedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, redirectTo = '/' }) => {
  const isSignedIn = useSelector(selectAuthIsSignedIn); 
  return isSignedIn ? <Navigate to={redirectTo} replace/> : children;
};

export default PublicRoute;
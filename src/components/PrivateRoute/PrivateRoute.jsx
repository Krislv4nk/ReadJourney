
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element: Component, isAuthenticated }) => {
  return isAuthenticated ? Component : <Navigate to="/auth" />;
};
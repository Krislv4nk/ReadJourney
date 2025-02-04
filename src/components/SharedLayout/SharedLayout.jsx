import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header/Header';
import CircularProgressWithLabel from './CircularProgressWithLabel/CircularProgressWithLabel';
import Container from './Container/Container';

const SharedLayout = () => {
 const location = useLocation();
  const allowedRoutes = ['/recommended', '/library', '/reading'];
  return (
    <>
      <Container>
      {allowedRoutes.includes(location.pathname) && <Header />}
      <Suspense fallback={<CircularProgressWithLabel/>}>
        <Outlet />
      </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;

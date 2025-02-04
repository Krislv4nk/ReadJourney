import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
// import Container from './Container/Container';
import CircularProgressWithLabel from './CircularProgressWithLabel/CircularProgressWithLabel';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<CircularProgressWithLabel/>}>
        <Outlet />
        </Suspense>
    </>
  );
};

export default SharedLayout;

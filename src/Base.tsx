import { Outlet } from 'react-router';
import Footer from './Footer';
import Nav from './Nav';

const Base = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Base;

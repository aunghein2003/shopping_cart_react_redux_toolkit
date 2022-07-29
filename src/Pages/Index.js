import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Index = ({ user }) => {
  // if (!user) {
  //   return <Navigate to='/login' />;
  // }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Index;

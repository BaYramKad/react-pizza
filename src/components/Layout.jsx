import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = (props) => {
  console.log('LAYOUT RENDER');

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;

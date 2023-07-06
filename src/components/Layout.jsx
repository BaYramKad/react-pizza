import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import { useSelector } from 'react-redux';

const Layout = (props) => {
  const { error } = useSelector((state) => state.pizzaLoad);

  return (
    <>
      {!error && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;

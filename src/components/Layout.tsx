import { Outlet } from 'react-router-dom';

import Header from './Header';
import { useSelector } from 'react-redux';
import { pizzaLoadSelector } from '../toolkit/asyncLoadPizza/asyncPizzaSlice';

const Layout: React.FC = () => {
  const { error } = useSelector(pizzaLoadSelector);

  return (
    <>
      {!error && <Header />}
      <Outlet />
    </>
  );
};

export default Layout;

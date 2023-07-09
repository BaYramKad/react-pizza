import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Main from './pages/Main';
import Error from './pages/ErrorPage';
import Cart from './pages/CartPage';
import Layout from './components/Layout';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path={'cart'} element={<Cart />} />
              <Route path={'*'} element={<Error />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

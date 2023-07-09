import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './toolkit/store';

const elementRoot = document.getElementById('root');
if (elementRoot) {
  const root = ReactDOM.createRoot(elementRoot);

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
}

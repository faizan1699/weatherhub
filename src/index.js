import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';

import { HashRouter, BrowserRouter } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </BrowserRouter>

);

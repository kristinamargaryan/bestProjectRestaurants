import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthProvaider from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <AuthProvaider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvaider>
  </React.StrictMode>
);


reportWebVitals();

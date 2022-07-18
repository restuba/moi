import React from 'react';
import ReactDOM from 'react-dom/client';
import Pages from './pages';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { GlobalProvider } from './context/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <Pages />
    </GlobalProvider>
  </React.StrictMode>
);
reportWebVitals();

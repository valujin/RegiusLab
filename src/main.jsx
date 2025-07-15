import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App.jsx';
import './style/index.css';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </CookiesProvider>
);

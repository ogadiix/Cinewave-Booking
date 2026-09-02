import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ToastProvider } from './context/ToastContext';
import { LocationProvider } from './context/LocationContext';
import { initializeData } from './utils/storage';

initializeData();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <LocationProvider>
        <App />
      </LocationProvider>
    </ToastProvider>
  </React.StrictMode>
);

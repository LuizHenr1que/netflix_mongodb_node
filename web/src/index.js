import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import Routes from './routes';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
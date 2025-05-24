// This is the entry point for React app
// Loads App.tsx
// It starts the entire frontend app and connects it to the index.html in public/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

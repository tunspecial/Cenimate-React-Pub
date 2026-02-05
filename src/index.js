// Core React library
import React from 'react';
// React 18 root API for rendering
import ReactDOM from 'react-dom/client';
// Enables routing features (Link, Routes, useParams, etc.)
import { BrowserRouter } from 'react-router-dom';
// Global CSS styles
import './index.css';
// Main App component
import App from './App';
// Utility component to reset scroll position on route change
import { ScrollToTop } from './components';
// Create React root and attach it to the DOM element with id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the React application
root.render(
  // StrictMode helps detect potential problems in development
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

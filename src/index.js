import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css'; // Ensure Tailwind CSS is imported here

// Create a root using the new createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

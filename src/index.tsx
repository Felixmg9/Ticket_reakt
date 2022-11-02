import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App_ticket from './App_ticket';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>
  <React.StrictMode>
    <App_ticket />
  </React.StrictMode>
);

reportWebVitals();

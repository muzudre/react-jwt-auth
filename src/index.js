import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='className="bg-gray-50 dark:bg-gray-900"'>
      <App />
    </div>
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import App from './Landing page/App';
import Finder from './API consume/Finder.js'
import Rola from './Teste/rola.js';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/finder",
    element: <Finder />
  },
  {
    path:"/rola",
    element: <Rola />
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

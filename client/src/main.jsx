import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import About from './views/About.jsx';
import Admin from './views/Admin.jsx';
import Contact from './views/Contact.jsx';
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import PrivacyPolicy from './views/PrivacyPolicy.jsx';
import Products from './views/Products.jsx';
import ProductDetail from './views/ProductDetail.jsx';


import './index.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', 
    element: <App />, 
    children: [
      { path: '/', element: <Login/> },
      { path: '/home', element: <Home/> },
      { path: '/products', element: <Products/> },
      { path: '/products/:productId', element: <ProductDetail/> },     
      { path: '/admin', element: <Admin /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/privacy', element: <PrivacyPolicy /> }  
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

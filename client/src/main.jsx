import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductHandler from './views/ProductHandler.jsx'
import Products from './views/Products.jsx';
import ProductDetail from './views/ProductDetail.jsx';
import UserHandler from './views/UserHandler.jsx';
import Home from './views/Home.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      { 
        path: '/', 
        element: <Home/> 
      },
      { 
        path: '/products/new', 
        element: <ProductHandler/> 
      },
      {
        path: '/users/new',
        element: <UserHandler/>
      },
      { 
        path: '/products', 
        element: <Products/> 
      },
      { 
        path: '/products/:id', 
        element: <ProductDetail/> 
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ProductHandler from './views/ProductHandler.jsx'
import ProductList from './views/ProductList.jsx';
import ProductDetail from './views/ProductDetail.jsx';
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
        path: '/products', 
        element: <ProductList/> 
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

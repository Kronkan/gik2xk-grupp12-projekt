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
        path: '/products', 
        element: <Products/> 
      },
      { 
        path: '/products/:productId', 
        element: <ProductDetail/> 
      },
      { 
        path: '/products/new', 
        element: <ProductHandler/> 
      },
      {
        path: '/product/:productId/edit',
        element: <ProductHandler />
      },
      { 
        path: '/product/:productId/delete',
        element: <ProductHandler />
      },
      {
        path: '/ProductHandler',
        element: <ProductHandler />
      },
      {
        path: '/users',
        element: <UserHandler />
      },
      {
        path: '/users/:userId/getUser',
        element: <UserHandler />
      },
      {
        path: '/users/new',
        element: <UserHandler />
      },
      {
        path: '/users/:userId/edit',
        element: <UserHandler />
      },
      {
        path: '/users/:userId/delete',
        element: <UserHandler />

      },
      {
        path: '/users/:userId/getCart',
        element: <Home />
      },
      {
        path: '/product/:productId/addRating',
        element: <ProductDetail />
      },
      {
        path: '/product/:productId/getAllRatings',
        element: <ProductDetail />
      },
      {
        path: '/product/:productId/addToCart',
        element: <ProductDetail />
      }, 
       
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

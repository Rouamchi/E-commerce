import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Registration from './Pages/Registration';
import NextRegistration from './Pages/NextRegistration'
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';
import Favorites from './Pages/Favorites';
import Categories from './Pages/Categories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Sorry, Page not found</h1>
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/signIn",
    element: <SignIn/>,
  },
  {
    path: "/Registration",
    element: <Registration/>,
  },
  {
    path: "/NextRegistration",
    element: <NextRegistration/>,
  },
  {
    path: "/ProductDetails/:id",
    element: <ProductDetails/>,
  },
  {
    path: "/ShoppingCart",
    element: <ShoppingCart/>,
  },
  {
    path: "/Favorites",
    element: <Favorites/>,
  },
  {
    path: "/Categories",
    element: <Categories/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

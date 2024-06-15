import React, { useEffect } from 'react'
import LoginPage from './pages/LoginPage';
import WebFont from 'webfontloader'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContentPage from './pages/ContentPage';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Roboto', 'Poppins']
      }
    })
  }, [])

  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ContentPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    }
  ]);
  return (
    <div
      className='container'
    ><RouterProvider router={router} /></div>
  )
}

export default App
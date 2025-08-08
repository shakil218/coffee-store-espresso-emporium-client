import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import AddCoffee from './pages/AddCoffee.jsx';
import UpdateCoffee from './pages/UpdateCoffee.jsx';
import CoffeeDetails from './pages/CoffeeDetails.jsx';
import Error from './pages/ErrorPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/add-coffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"/update-coffee",
    element:<UpdateCoffee></UpdateCoffee>
  },
  {
    path:"/details",
    element:<CoffeeDetails></CoffeeDetails>
  },
  {
    path:"/error",
    element:<ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

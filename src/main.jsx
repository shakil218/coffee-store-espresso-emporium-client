import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";
import CoffeeDetails from "./pages/CoffeeDetails";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./provider/AuthProvider";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/details/:id",
    element: <CoffeeDetails></CoffeeDetails>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/users",
    element: <Users></Users>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('http://localhost:5000/users'),
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

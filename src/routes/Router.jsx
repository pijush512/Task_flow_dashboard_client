import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../Pages/Login";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          index: true,
          element: <Home></Home>
        }
      ]
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: <Login></Login>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <h2>Dashboard</h2>
    },
    {
      path: "/*",
      element: <h2>Error</h2>
    }
  ]
)

export default router;
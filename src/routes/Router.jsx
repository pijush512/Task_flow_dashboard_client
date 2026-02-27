import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import DachboardLayout from "../layouts/DashboardLayout/DachboardLayout";
import Dashboard from "../Pages/Dashboard";

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
      element: <PrivateRoute>
        <DachboardLayout></DachboardLayout>
      </PrivateRoute>,
      children: [
        {
          index: true, // এর ফলে /dashboard এ গেলেই Dashboard দেখা যাবে
          element: <Dashboard />
        },
      ]
    },
    {
      path: "/*",
      element: <h2>Error</h2>
    }
  ]
)

export default router;
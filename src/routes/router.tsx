import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home/Home";
import LoginPage from "@/pages/Auth/Login";
import MainLayout from "@/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

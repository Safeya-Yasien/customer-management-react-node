import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@layouts/MainLayout";
import AddCustomerForm from "@/pages/AddCustomerForm";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-customer",
        element: <AddCustomerForm />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

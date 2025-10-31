import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@layouts/MainLayout";
import Home from "@/pages/Home";
import CustomerDetailsPage from "@/pages/CustomerDetails";
import AddCustomerPage from "@/pages/AddCustomer";

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
        path: "customers/add-customer",
        element: <AddCustomerPage />,
      },
      {
        path: "customers/edit-customer/:id",
        element: <AddCustomerPage />,
      },
      {
        path: "customers/:id",
        element: <CustomerDetailsPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

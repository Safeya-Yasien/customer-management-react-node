import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@layouts/MainLayout";
import AddCustomersForm from "@pages/AddCustomersForm";
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
        path: "add-customers",
        element: <AddCustomersForm />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "@routes/AppRouter";
import "./index.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <AppRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick={true}
      />
    </QueryClientProvider>
  </StrictMode>
);

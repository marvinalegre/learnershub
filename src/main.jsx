import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

import Root from "./routes/Root";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./routes/Login";
import AdminPage, { loader as adminLoader } from "./routes/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
      },
      {
        path: "/admin",
        element: <AdminPage />,
        loader: adminLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

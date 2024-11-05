import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

import Root, { loader as rootLoader } from "./routes/Root";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./routes/Login";
import AdminPage, { loader as adminLoader } from "./routes/AdminPage";
import Resources, { loader as resourcesLoader } from "./routes/Resources";
import Index from "./routes/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Index />,
      },
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
      {
        path: "/resources",
        element: <Resources />,
        loader: resourcesLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Classes from "./pages/Classes";
import Bestiary from "./pages/Bestiary";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rules",
        element: <Rules />,
        loader: () => fetch("https://www.dnd5eapi.co/api/rules"),
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/bestiary",
        element: <Bestiary />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

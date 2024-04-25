import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Classes from "./pages/Classes";
import Bestiary from "./pages/Bestiary";
import Spells from "./pages/Spells";
import Test from "./components/SpellList";

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
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/bestiary",
        element: <Bestiary />,
        loader: () =>
          fetch(
            "https://api.open5e.com/v1/monsters/?document__slug=wotc-srd&limit=500"
          ),
      },
      {
        path: "/spells",
        element: <Spells />,
        loader: () => fetch("https://www.dnd5eapi.co/api/spells"),
      },
      {
        path: "/test",
        element: <Test />,
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

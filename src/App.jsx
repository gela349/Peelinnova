import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

import Team from "./pages/Team"; // same note as above
import VisionMission from "./pages/VisionMission"; // same note as above
import Contact from "./pages/Contact"; // if you have a Contact page
import All from "./pages/All"; // if you have an All page that includes all sections
import Sdgs from "./pages/SDGs";

const peellnnova = createBrowserRouter([
  { path: "/", element: <All /> },
  { path: "/about", element: <About /> },
  { path: "/product", element: <Product /> },
  { path: "/sdgs", element: <Sdgs /> },
  { path: "/team", element: <Team /> },
  { path: "/vision-mission", element: <VisionMission /> },
  {path: "/contact", element: <Contact /> },
]);

export default function App() {
  return <RouterProvider router={peellnnova} />;
}

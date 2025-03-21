import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Firstlayout from "./Component/Firstlayout.jsx";
import About from "./Component/About.jsx";
import Experties from "./Component/Experties.jsx";
import Eductional from "./Component/Eductional";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Firstlayout />} />
      <Route path="/About" element={<About />} />
      <Route path="/Eductional" element={<Eductional />} />
      <Route path="/Experties" element={<Experties/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

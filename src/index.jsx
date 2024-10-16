import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from './routes'; // Make sure to import the routes from the routes.js file
import './index.css'; // Assuming you have a CSS file for general styles

const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure your HTML has a root element

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

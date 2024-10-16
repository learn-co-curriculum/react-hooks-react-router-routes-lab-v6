// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes"; // Assuming you have a routes file

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;

import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
// const Main = () => {
//   return (
//     <>
//       <header>
//         <NavBar />
//       </header>
//       <RouterProvider router={router} />
//     </>
//   );
// };
// root.render(<Main />);

root.render(<RouterProvider router={router} />);

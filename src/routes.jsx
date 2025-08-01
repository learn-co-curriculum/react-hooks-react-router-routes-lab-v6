import Home from "./pages/Home.jsx";
import Actors from "./pages/Actors.jsx";
import Directors from "./pages/Directors.jsx";
import Movie from "./pages/Movie.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"; // You'll create this component

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id", // URL parameter for movie ID
    element: <Movie />,
  },
];

export default routes;
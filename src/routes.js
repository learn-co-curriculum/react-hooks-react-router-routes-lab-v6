import Home from "../src/pages/Home.js"
import Directors from "../src/pages/Directors.js"
import Actors from "../src/pages/Actors.js"
import Movie from "../src/pages/Movie.js"
import ErrorPage from "../src/pages/ErrorPage.js"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/movie/:id`,
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
]

export default routes

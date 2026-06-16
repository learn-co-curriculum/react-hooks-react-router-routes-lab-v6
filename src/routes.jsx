import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const routes = [
	{
		path: "/movie/:id",
		element: <Movie />,
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
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
];

export default routes;

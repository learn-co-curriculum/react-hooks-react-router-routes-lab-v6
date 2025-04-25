// routes.jsx
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'directors', element: <Directors /> },
      { path: 'actors', element: <Actors /> },
      { path: 'movie/:id', element: <Movie /> }
    ]
  }
];

export default routes;
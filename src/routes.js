// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/directors',
    element: <Directors />,
  },
  {
    path: '/actors',
    element: <Actors />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
  },
]);

export default router;



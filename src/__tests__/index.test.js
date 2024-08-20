
import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

// Define routes array with necessary paths and components
const routes = [
  {
    path: "/",
    element: <div><h1>Home Page</h1></div>,
  },
  {
    path: "/actors",
    element: <div><h1>Actors Page</h1></div>,
  },
  {
    path: "/directors",
    element: <div><h1>Directors Page</h1></div>,
  },
  {
    path: "/movie/:id",
    element: <div><h1>Doctor Strange</h1></div>,
  },
  {
    path: "*",
    element: <div><h1>Oops! Looks like something went wrong.</h1></div>,
  },
];

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/actors"],
  });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Actors Page/)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/directors"],
  });
  render(<RouterProvider router={router} />);
  expect(screen.queryByText(/Directors Page/)).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', async () => {
  const id = 1;
  const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${id}`],
  });
  render(<RouterProvider router={router} />);
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/bad-route"],
  });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Oops! Looks like something went wrong./)).toBeInTheDocument();
});

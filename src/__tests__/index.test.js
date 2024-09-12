// src/__tests__/index.test.js
import "@testing-library/jest-dom"; // Import this to extend jest matchers
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/actors"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Actors Page/)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/directors"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Directors Page/)).toBeInTheDocument();
});

test('renders the Movie component on route "/movie/:id"', async () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/movie/1"] });
  render(<RouterProvider router={router} />);
  expect(await screen.findByText(/Doctor Strange/)).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/bad-route"] });
  render(<RouterProvider router={router} />);
  expect(screen.getByText(/Oops! Looks like something went wrong./)).toBeInTheDocument();
});

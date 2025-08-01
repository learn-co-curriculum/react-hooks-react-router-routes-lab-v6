import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

// Helper function to render the NavBar wrapped in a BrowserRouter
const renderWithRouter = () => {
  return render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
};

test('wraps content in a div with "navbar" class', () => {
  const { container } = renderWithRouter();
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", async () => {
  renderWithRouter();
  const a = screen.getByText(/Home/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");
});

test("renders a Actors <NavLink>", async () => {
  renderWithRouter();
  const a = screen.getByText(/Actors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/actors"); // Ensure the href matches the route
});

test("renders a Directors <NavLink>", async () => {
  renderWithRouter();
  const a = screen.getByText(/Directors/);

  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/directors"); // Ensure the href matches the route
});

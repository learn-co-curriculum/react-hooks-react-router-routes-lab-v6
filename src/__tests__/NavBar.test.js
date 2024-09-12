// src/__tests__/NavBar.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import "@testing-library/jest-dom/extend-expect";  // Ensure jest-dom is properly extended

let container;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", () => {
  const a = screen.queryByText(/Home/);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/");
  fireEvent.click(a);
  expect(a.classList).toContain("active");
});

test("renders an Actors <NavLink>", () => {
  const a = screen.queryByText(/Actors/);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/actors");
  fireEvent.click(a);
  expect(a.classList).toContain("active");
});

test("renders a Directors <NavLink>", () => {
  const a = screen.queryByText(/Directors/);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toBe("A");
  expect(a.href).toContain("/directors");
  fireEvent.click(a);
  expect(a.classList).toContain("active");
});


import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  ).container;

  // Log the container HTML to see what is rendered
  console.log(container.innerHTML);
});

test('wraps content in a div with "navbar" class', () => {
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", () => {
  const link = screen.getByRole("link", { name: "Home" });

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.href).toContain("/");

  fireEvent.click(link, { button: 0 });

  expect(link.classList).toContain("active");
});

test("renders an Actors <NavLink>", () => {
  const link = screen.getByRole("link", { name: "Actors" });

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.href).toContain("/actors");

  fireEvent.click(link, { button: 0 });

  expect(link.classList).toContain("active");
});

test("renders a Directors <NavLink>", () => {
  const link = screen.getByRole("link", { name: "Directors" });

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.href).toContain("/directors");

  fireEvent.click(link, { button: 0 });

  expect(link.classList).toContain("active");
});

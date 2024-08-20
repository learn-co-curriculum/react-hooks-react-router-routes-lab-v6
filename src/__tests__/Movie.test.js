
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const mockMovie = {
  id: 1,
  title: "Doctor Strange",
  description: "A great movie about a neurosurgeon who discovers the hidden world of magic.",
};

test("renders movie title in an h2", () => {
  render(
    <BrowserRouter>
      <MovieCard {...mockMovie} />
    </BrowserRouter>
  );
  const h2 = screen.getByText(/Doctor Strange/);
  expect(h2).toBeInTheDocument();
  expect(h2.tagName).toBe("H2");
});

test("renders movie description in a p tag", () => {
  render(
    <BrowserRouter>
      <MovieCard {...mockMovie} />
    </BrowserRouter>
  );
  const p = screen.getByText(/A great movie about a neurosurgeon who discovers the hidden world of magic./);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders a link to the movie details page", () => {
  render(
    <BrowserRouter>
      <MovieCard {...mockMovie} />
    </BrowserRouter>
  );
  const link = screen.getByRole("link", { name: /View Details/ });
  expect(link).toBeInTheDocument();
  expect(link.getAttribute("href")).toBe("/movie/1");
});

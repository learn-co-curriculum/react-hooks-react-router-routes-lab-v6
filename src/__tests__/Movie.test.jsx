import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";


// Mocking fetch with vi.fn() (Vitest equivalent to jest.fn())
global.fetch = vi.fn(() =>
   Promise.resolve({
       json: () =>
           Promise.resolve({
               title: "Doctor Strange",
               time: 115,
               genres: ["Action", "Adventure", "Fantasy"]
           })
   })
);


const router = createMemoryRouter(routes, {
   initialEntries: [`/movie/1`], // Route for movie page with ID 1
});


test("renders movie's title in an h1", async () => {
   render(<RouterProvider router={router} />);
   const h1 = await screen.findByText(/Doctor Strange/); // Match movie title
   expect(h1).toBeInTheDocument();
   expect(h1.tagName).toBe("H1");
});


test("renders movie's time within a p tag", async () => {
   render(<RouterProvider router={router} />);
   const p = await screen.findByText(/115/); // Match movie duration
   expect(p).toBeInTheDocument();
   expect(p.tagName).toBe("P");
});


test("renders a span for each genre", async () => {
   render(<RouterProvider router={router} />);
   const genres = ["Action", "Adventure", "Fantasy"];
   genres.forEach(async (genre) => {
       const span = await screen.findByText(genre);
       expect(span).toBeInTheDocument();
       expect(span.tagName).toBe("SPAN");
   });
});


test("renders the <NavBar /> component", async () => {
   render(<RouterProvider router={router} />);
   expect(await screen.findByRole("navigation")).toBeInTheDocument();
});

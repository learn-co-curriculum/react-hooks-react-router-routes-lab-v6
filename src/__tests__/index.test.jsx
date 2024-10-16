import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";


// Mocking fetch for the movie data
global.fetch = vi.fn(() =>
   Promise.resolve({
       json: () =>
           Promise.resolve({
               title: "Doctor Strange",
               time: 115,
               genres: ["Action", "Adventure", "Fantasy"],
           }),
   })
);


const router = createMemoryRouter(routes, {
   initialEntries: [`/movie/1`], // Simulate navigating to /movie/1
});


test("renders the Movie component on route '/movie/:id'", async () => {
   render(<RouterProvider router={router} />);


   const movieTitle = await screen.findByText(/Doctor Strange/);
   expect(movieTitle).toBeInTheDocument();
});



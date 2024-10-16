import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";


const router = createMemoryRouter(routes, {
   initialEntries: [`/actors`], // Route for actors page
});


test("renders each actor's name", async () => {
   render(<RouterProvider router={router} />);
   const actors = ["Benedict Cumberbatch", "Tom Hiddleston"];
   for (const actor of actors) {
       expect(await screen.findByText(actor, { exact: false })).toBeInTheDocument();
   }
});


test("renders a <li /> for each movie", async () => {
   render(<RouterProvider router={router} />);
   const movies = ["Doctor Strange", "The Imitation Game", "Thor", "Loki"];
   for (const movie of movies) {
       const li = await screen.findByText(movie, { exact: false });
       expect(li).toBeInTheDocument();
       expect(li.tagName).toBe("LI");
   }
});


test("renders the <NavBar /> component", async () => {
   render(<RouterProvider router={router} />);
   expect(await screen.findByRole("navigation")).toBeInTheDocument();
});


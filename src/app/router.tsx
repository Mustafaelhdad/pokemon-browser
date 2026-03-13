import { createBrowserRouter } from "react-router-dom";

import { PokemonListPage } from "../pages/PokemonListPage";
import { PokemonDetailsPage } from "../pages/PokemonDetailsPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonListPage />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetailsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

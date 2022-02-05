import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, MovieDetails } from "./pages/index";

function MovieRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="busca_id" element={<MovieDetails />}>
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MovieRoutes;

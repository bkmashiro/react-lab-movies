import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MovieDetailsPage";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";
import MovieReviewPage from "./pages/MovieReviewPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reviews/:id" element={<MovieReviewPage />} />
        <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);

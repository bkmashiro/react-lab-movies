import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MovieDetailsPage";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";
import MovieReviewPage from "./pages/MovieReviewPage";
import SiteHeader from './components/siteHeader'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/reviews/:id" element={<MovieReviewPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);

import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import AddToPlayList from "../components/cardIcons/playListAdd";

const UpcomingMoviesPage = () => {
  // Create an array of queries and run in parallel.
  const upcomingMovieQueries = useQuery("upcoming", getUpcomingMovies);
  // Check if any of the parallel queries is still loading.
  // const isLoading = upcomingMovieQueries.find((m) => m.isLoading === true);
  const isLoading = upcomingMovieQueries.isLoading;

  if (isLoading) {
    return <Spinner />;
  }

  console.log(upcomingMovieQueries.data);

  const movies = upcomingMovieQueries.data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            {/* <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} /> */}
            <AddToPlayList movie={movie} />
          </>
        );
      }}
    />
  );
};

export default UpcomingMoviesPage;

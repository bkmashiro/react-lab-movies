import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([])
  const [myReviews, setMyReviews] = useState({})
  const [playList, setPlayList] = useState([])

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    }
    else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review })
  };

  const addMovieToPlayList = (movie) => {
    let newPlayList = [];
    if (!playList.includes(movie.id)) {
      newPlayList = [...playList, movie.id];
    }
    else {
      newPlayList = [...playList];
    }
    setPlayList(newPlayList)
  };

  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter(
      (mId) => mId !== movie.id
    ))
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        myReviews,
        addMovieToPlayList,
        playList
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
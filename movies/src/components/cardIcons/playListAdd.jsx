import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from "@mui/icons-material/PlaylistAdd";

const AddToPlayList = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylist = (e) => {
    console.log("Adding to playlist: ", movie);
    context.addMovieToPlayList(movie);
    console.log("PlayList: ", context.playList);
  };

  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlayList;

import React from "react";
import MovieCard from "./MovieCard";

const movieDisplay = movieList.map((movie, index) => {
  return <MovieCard movie={movie}/>;
});

const MovieScreen = ({ movieList, list, page, setPage }) => {
  return;
  <React.Fragment>
    <div className="page">
      <h1>Ashley's Movie Theater</h1>
      <h3>Add a movie to your watch list!</h3>
      <div className="movie_container">{movieDisplay}</div>
    </div>
  </React.Fragment>;
};

export default MovieScreen;

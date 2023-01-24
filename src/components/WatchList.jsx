import React from "react";
import MovieCard from "./MovieCard";


const WatchList = ({ list, removeMovie }) => {
  const movieDisplay = list.map((movie, index) => {
    return <MovieCard list={list} removeMovie={removeMovie} movie={movie}/>;
})
  return (
    <div className="watchlist">
      <h1>My Watch List</h1>
      <div className="movie-container">
      {movieDisplay}</div>
    </div>
  );
};



export default WatchList;
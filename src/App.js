import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";

function App() {
  const { movieList, setMovieList } = useState([]);
  const { watchList, setWatchList } = useState([]);
  const { page, setPage } = useState(1);

  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen
        movieList={movieList}
        page={page}
        setPage={setPage}
        list={watchList}
        />
      </main>
    </div>
  );
}

const getData = () => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
    )
    .then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
};

useEffect(() => {
  getData();
}, [page]);

export default App;

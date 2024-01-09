import { useEffect, useState } from "react";
import Axios from "axios";
import searchIcon from "./assets/search.svg";
import Moviecard from "./Moviecard";

function App() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const fetchMovie = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=97fc7fab&s=marvel"
    );
    const result = await response.json();
    console.log(result.Search);
    setMovies(result.Search);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search your favorite Movie"
          onChange={(evt) => setKeyword(evt.target.value)}
        />
        <img src={searchIcon} alt="search" />
      </div>

      <div className="container">
        {movies
          .filter((movie) => movie.Title.toLowerCase().includes(keyword))
          .map((movie) => (
            <Moviecard key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default App;

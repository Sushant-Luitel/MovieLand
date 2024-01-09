import React from "react";

const Moviecard = ({ movie }) => {
  return (
    <div>
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img src={movie.Poster} alt="" />
        </div>

        <div>
          <span>{movie.Type}</span>
          <span>{movie.Title}</span>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;

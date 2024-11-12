import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectMovies, fetchById } from "./MoviesSlice.js";
import Stock from "../../images/blank.png";

export default function Movies() {
  const movies = useSelector(selectMovies);
  let movieInfo;

  if (movies !== "n/a") {
    movieInfo = movies.map((movie) => {
      return (
        <div className="row my-5 align-items-center" key={movie.imdbID}>
          <div className="col-6 col-sm-4 col-lg-2">
            {movie.Poster !== "N/A" && (
              <img src={movie.Poster} alt="Movie Post" width="100%" />
            )}
            {movie.Poster === "N/A" && (
              <img src={Stock} alt="Movie Post" width="100%" />
            )}
          </div>
          <div className="col">
            <p className="m-0">{movie.Year}</p>
            <h2 className="my-1">{movie.Title}</h2>
            <Link to={`/movie/${movie.imdbID}`}>More Info</Link>
          </div>
        </div>
      );
    });
  } else {
    movieInfo = "No Results Found.";
  }

  return <div>{movieInfo}</div>;
}

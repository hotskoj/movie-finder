import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { selectMovie, fetchById } from "./MoviesSlice.js";

export default function Movie() {
  const movie = useSelector(selectMovie);
  const { id } = useParams();

  const dispatch = useDispatch();
  const [requestStatus, setRequestStatus] = useState("idle");

  useEffect(() => {
    try {
      setRequestStatus("pending");
      dispatch(fetchById(id)).unwrap();
    } catch (error) {
      console.error("Failed to load data", error);
    } finally {
      setRequestStatus("idle");
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          {movie.Poster !== "N/A" && (
            <img src={movie.Poster} alt="Movie Post" width="100%" />
          )}
          {movie.Poster === "N/A" && (
            <img src={Stock} alt="Movie Post" width="100%" />
          )}
        </div>
        <div className="col-sm-8">
          <h1>{movie.Title}</h1>
          <p>{`Released ${movie.Year} | ${movie.Runtime} | ${movie.Genre}`}</p>
          <p className="plot">{movie.Plot}</p>
          <p>{movie.Awards}</p>
          <p>{`Metascore: ${movie.Metascore}`}</p>
          <p>{`IMDB: ${movie.imdbRating}`}</p>
        </div>
      </div>
    </div>
  );
}

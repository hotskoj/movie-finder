import React, { useState } from "react";
import Movies from "./Movies/MoviesList.jsx";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./Movies/MoviesSlice.js";

export default function Home() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [requestStatus, setRequestStatus] = useState("idle");

  function titleChange(e) {
    setTitle(e.target.value);
  }

  function onSearch(e) {
    e.preventDefault();
    if (title) {
      try {
        setRequestStatus("pending");
        dispatch(fetchMovies(title)).unwrap();
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setRequestStatus("idle");
      }
    }
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="mb-3">Movie/Show Finder</h1>
        <form
          onSubmit={onSearch}
        >
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Movie or Show Title..."
              name="title"
              value={title}
              onChange={titleChange}
            />
            <button
              type="button"
              onClick={onSearch}
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
        </form>
        <Movies />
      </div>
    </>
  );
}

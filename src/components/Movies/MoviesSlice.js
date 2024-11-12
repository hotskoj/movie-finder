import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("/search", async (title) => {
  const options = {
    method: "GET",
    url: `/search/${title}`,
  };
  const response = await axios.request(options);
  return response.data;
});

export const fetchById = createAsyncThunk("/movie", async (id) => {
  const options = {
    method: "GET",
    url: `/movie/${id}`,
  };
  const response = await axios.request(options);
  return response.data;
});

const initialState = {
  movie: {},
  movies: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie = action.payload;
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectMovies = (state) => state.movies.movies;
export const selectMovie = (state) => state.movies.movie;

export default moviesSlice.reducer;

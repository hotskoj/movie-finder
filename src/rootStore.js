import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './components/Movies/MoviesSlice.js';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});

export default store;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import NavBar from "./NavBar.jsx";
import Movie from './Movies/Movie.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<Movie/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

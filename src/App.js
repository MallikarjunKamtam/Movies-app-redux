import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MoviesDetail from "./components/MovieDetail/MoviesDetail";
import PageNotFound from "./components/Pagenotfound/PageNotFound";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/movie/:imdbID" element={<MoviesDetail />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

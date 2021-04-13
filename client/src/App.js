import React, { Fragment } from "react";

import Header from './components/Header';
import MovieList from './components/MainMovieBody/MovieList';

function App() {
  return (
    <Fragment>
      <div>
        <Header />
        <MovieList />
      </div>
    </Fragment>
  );
}

export default App;

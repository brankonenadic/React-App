import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fachMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong !!!');
      }
      const data = await response.json();
      const transforMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl
        }
      });
      setMovies(transforMovies);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }


  /* const fachMoviesHandler = () => {
    fetch('https://swapi.dev/api/films/').then(response => {
      return response.json();
    }).then(data => {
      const transforMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          openingText: movieData.opening_crawl
        }
      });
      setMovies(transforMovies);
    })
  }
   */

  let content = <p>No found movies !!!</p>;
  if (movies.length > 0) {
    content =  <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading....</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fachMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      {content}
      </section>
    </React.Fragment>
  );
}

export default App;
/*   {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {movies.length === 0 && !error && <p>No found movies !!!</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading....</p>} */
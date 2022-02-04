import MovieRepository from "../../core/repositories/movieRepository";
import { useState, useEffect } from "react";
import { MovieCard } from "../index";

function Movies() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    MovieRepository.popular()
      .then((data) => {
        setmovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(movies);

  return (
    <>
      {movies.map((item) => {
        return (
          <MovieCard
            title={item.title}
            release={item.release_date}
            key={item.id}
          />
        );
      })}
    </>
  );
}

export default Movies;

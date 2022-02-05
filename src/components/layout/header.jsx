import "../layout.scss";
import React from "react";
import { useEffect, useState } from "react";
import MovieRepository from "../../core/repositories/movieRepository";
import { GenreButton } from "../index";

function Header() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    MovieRepository.genre()
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <header>
      <div className="headItems">
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <div className="genreList">
          <h6>FILTRE POR:</h6>
          {genres.map((item) => {
            return <GenreButton name={item.name} key={item.id} />;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;

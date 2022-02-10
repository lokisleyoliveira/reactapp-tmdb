import "./header.scss";
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
        <p>Milhões de filmes, séries e pessoas para descobrir. Explore já.</p>
        <div className="genreList">
          <p>FILTRE POR:</p>
          {genres.map((item) => {
            return <GenreButton name={item.name} id={item.id} key={item.id} />;
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;

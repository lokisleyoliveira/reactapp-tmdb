import React from "react";

function MovieCard(props) {
  return (
    <a className="movieCard">
      <img src={"https://image.tmdb.org/t/p/w500" + props.poster} />
      <span className="title"> {props.title}</span>
      <span className="release"> {props.release}</span>
    </a>
  );
}

export default MovieCard;

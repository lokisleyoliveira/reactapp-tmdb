import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.scss";

function MovieCard(props) {
  return (
    <>
      <Link className="movieCard" to={`/busca_id/${props.id}`}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.poster}
          alt={props.title}
        />
        <span className="title"> {props.title}</span>
        <span className="release"> {props.release}</span>
      </Link>
    </>
  );
}

export default MovieCard;

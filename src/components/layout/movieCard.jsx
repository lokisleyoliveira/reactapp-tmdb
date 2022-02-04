function MovieCard(props) {
  return (
    <div className="movieCard">
      <p> {props.title}</p>
      <p> {props.release}</p>
    </div>
  );
}

export default MovieCard;

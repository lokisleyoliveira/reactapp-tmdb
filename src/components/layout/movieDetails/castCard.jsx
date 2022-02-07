import { Image } from "react-bootstrap";

function CastCard({ pic, name, char }) {
  return (
    <div className="castCard">
      <Image fluid src={"https://image.tmdb.org/t/p/w500" + pic} />
      <span className="castName">{name}</span>
      <span className="castChar">{char}</span>
    </div>
  );
}

export default CastCard;

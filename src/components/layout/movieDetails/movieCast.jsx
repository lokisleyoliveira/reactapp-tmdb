import { CastCard } from "../../index";
import "./cast.scss";

function MovieCast({ cast }) {
  return (
    <div className="movieCast">
      <h3>Elenco Original</h3>
      <div className="castPanel">
        {cast.map((item) => {
          return (
            !!item.profile_path && (
              <CastCard
                pic={item.profile_path}
                name={item.name}
                char={item.character}
                key={item.credit_id}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default MovieCast;

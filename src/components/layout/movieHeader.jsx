import "../layout.scss";
import { UserVotes } from "../index";
import { Container } from "react-bootstrap";

function MovieHeader(props) {
  return (
    <Container>
      <div className="movieHeader">
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.poster}
          alt={props.title}
        />
        <div className="headerInfo">
          <h2 className="title">
            {props.title} ({props.year})
          </h2>
          <p className="movieInfo">
            {props.certification} • {props.release} ({props.location}) •{" "}
            {props.genres} • {props.duration}
          </p>
          <UserVotes voteAverage={props.voteAverage} />
          <h5> Sinopse </h5>
          <p className="sinopse"> {props.overview} </p>
          <span className="crew">
            {props.crew.map((item) => {
              return (
                <span className="crewMember">
                  <span className="name">{item.name}</span>
                  <span className="job">{item.job}</span>
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </Container>
  );
}

export default MovieHeader;

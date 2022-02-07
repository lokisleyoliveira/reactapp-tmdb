import "../layout.scss";
import { UserVotes } from "../index";
import { Container, Col, Row, Image } from "react-bootstrap";

function MovieHeader(props) {
  return (
    <Container fluid className="movieHeader">
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <Image
            src={"https://image.tmdb.org/t/p/w500" + props.poster}
            alt={props.title}
            fluid
          />
        </Col>
        <Col md={7}>
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
                  <span className="crewMember" key={item.credit_id}>
                    <span className="name">{item.name}</span>
                    <span className="job">{item.job}</span>
                  </span>
                );
              })}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieHeader;

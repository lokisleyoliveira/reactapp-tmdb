import { Row, Col } from "react-bootstrap";
import { MovieCard } from "../index";
import { formatDate } from "../../core/util/attributeParser";

function Recommendations({ movies }) {
  return (
    <>
      <h3>Recomendações</h3>
      <Row xs={2} md={4} lg={6}>
        {movies.map((item) => {
          return (
            <Col key={item.id}>
              <MovieCard
                title={item.title || item.name}
                release={formatDate(item.release_date)}
                poster={item.poster_path}
                id={item.id}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Recommendations;

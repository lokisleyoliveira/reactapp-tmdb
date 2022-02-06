import FilterMoviesByGenre from "../../core/useCases/filterMoviesByGenre";
import { formatDate } from "../../core/util/attributeParser";
import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../index";
import { Container, Row, Col } from "react-bootstrap";

function Movies({ genres }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    FilterMoviesByGenre(genres)
      .then((data) => {
        setmovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [genres]);

  return (
    <Container>
      <Row xs={2} md={4} lg={5}>
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
    </Container>
  );
}

export default Movies;

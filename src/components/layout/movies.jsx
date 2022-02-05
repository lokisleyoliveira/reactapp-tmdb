import MovieRepository from "../../core/repositories/movieRepository";
import { formatDate } from "../../core/util/attributeParser";
import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../index";
import { Container, Row, Col } from "react-bootstrap";

function Movies() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    MovieRepository.popular()
      .then((data) => {
        setmovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container>
      <Row xs={2} md={4} lg={5}>
        {movies.map((item) => {
          return (
            <Col>
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

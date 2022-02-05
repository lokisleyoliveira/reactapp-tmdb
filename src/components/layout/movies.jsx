import MovieRepository from "../../core/repositories/movieRepository";
import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../index";
import { Container, Row, Col } from "react-bootstrap";

function Movies() {
  const [movies, setmovies] = useState([]);
  const month = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  useEffect(() => {
    MovieRepository.popular()
      .then((data) => {
        setmovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(movies);

  return (
    <Container>
      <Row xs={2} md={4} lg={5}>
        {movies.map((item) => {
          let data = new Date(item.release_date || item.first_air_date);
          return (
            <Col>
              <MovieCard
                title={item.title || item.name}
                release={`${data.getDay()} ${
                  month[data.getMonth()]
                } ${data.getFullYear()}`}
                poster={item.poster_path}
                key={item.id}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Movies;

import FilterMoviesByGenre from "../../core/useCases/filterMoviesByGenre";
import { formatDate } from "../../core/util/attributeParser";
import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MovieCard } from "../index";
import { Container, Row, Col } from "react-bootstrap";

const MAX_PAGE = 500;

function Movies() {
  const [movies, setmovies] = useState([]);

  const applyFilter = useSelector((state) => state.pagination.value);

  const [lastPage, setlastPage] = useState(1);

  useEffect(() => {
    FilterMoviesByGenre(applyFilter)
      .then((data) => {
        console.log(data);
        setmovies(data.results);
        // API maximum value for page is 500, although the documentation says it is 1000. lol
        const totalPages = Math.min(data.total_pages, MAX_PAGE);
        setlastPage(totalPages);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [applyFilter]);

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

import MovieRepository from "../core/repositories/movieRepository";
import { useParams } from "react-router-dom";
import { Nav } from "../components/index";
import {
  MovieHeader,
  MovieCast,
} from "../components/index";
import { useState, useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import moment from "moment";
import {
  getCertificationRelease,
  runtimeToString,
  getCrew,
} from "../core/util/attributeParser";

function MovieDetails() {
  const id = useParams();
  const [info, setinfo] = useState(undefined);

  useEffect(() => {
    MovieRepository.movie(id.movieId)
      .then((data) => {
        setinfo(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id.movieId]);

  const { certification, release, location } = useMemo(() => {
    if (info) {
      const brRelease = getCertificationRelease(info.release_dates.results);
      if (brRelease) {
        return {
          certification: brRelease.release_dates[0].certification,
          release: brRelease.release_dates[0].release_date,
          location: brRelease.iso_3166_1,
        };
      }
    }
    return {};
  }, [info]);

  const genres = info?.genres?.map((item) => item.name) ?? [];

  const crew = getCrew(info?.credits?.crew ?? []);

  return (
    <div style={{ background: "#f3f3f3" }}>
      <Nav />
      {!!info && (
        <>
          <MovieHeader
            poster={info.poster_path}
            title={info.title}
            year={moment(info.release_date).format("YYYY")}
            certification={certification}
            release={moment(release).format("L")}
            location={location}
            genres={genres.join(", ")}
            duration={runtimeToString(info.runtime)}
            voteAverage={info.vote_average}
            overview={info.overview}
            crew={crew}
          />
          <Container>
            <MovieCast cast={info.credits.cast} style={{ width: "100%" }} />
          </Container>
        </>
      )}
    </div>
  );
}

export default MovieDetails;

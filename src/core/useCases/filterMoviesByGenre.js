import MovieRepository from "../repositories/movieRepository";

async function FilterMoviesByGenre(payload) {
  if (payload.filter.length === 0) {
    console.log(payload);
    return await MovieRepository.popular(payload);
  }
  console.log(payload);
  return await MovieRepository.discover(payload);
}

export default FilterMoviesByGenre;

import MovieRepository from "../repositories/movieRepository";

async function FilterMoviesByGenre(filter) {
  if (filter.length === 0) return await MovieRepository.popular();
  return await MovieRepository.discover(filter);
}

export default FilterMoviesByGenre;

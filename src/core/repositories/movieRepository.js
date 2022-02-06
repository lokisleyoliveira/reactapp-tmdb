import axios from "axios";

class MovieRepository {
  static apiUrl = "https://api.themoviedb.org/3";

  constructor() {
    this.axios = axios.create({ baseURL: MovieRepository.apiUrl });
    this.axios.interceptors.request.use((config) => {
      config.params = config.params || {};
      config.params["api_key"] = this.apiKey;
      config.params["language"] = "pt-BR";
      return config;
    });
  }

  get apiKey() {
    return process.env.REACT_APP_API_KEY;
  }

  async popular() {
    const response = await this.axios.get("/movie/popular");
    return response.data;
  }

  async genre() {
    const response = await this.axios.get("/genre/movie/list");
    return response.data;
  }

  async movie(params) {
    const response = await this.axios.get(`/movie/${params}`, {
      params: {
        append_to_response: "release_dates,videos,credits,recommendations",
      },
    });
    return response.data;
  }
}

export default new MovieRepository();

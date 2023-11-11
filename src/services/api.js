import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'ca7c7084b600eecae0e2f34ff34fb9e6';

export const fetchTrendingMovies = async params => {
  const { data } = await axios.get('/trending/all/day', {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchSearchMovies = async params => {
  const { data } = await axios.get('/search/movie', {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieById = async params => {
  const { data } = await axios.get('/movie/movie_id', {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieCredits = async params => {
  const { data } = await axios.get('/movie/movie_id/credits', {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieReviews = async params => {
  const { data } = await axios.get('/movie/movie_id/reviews', {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};

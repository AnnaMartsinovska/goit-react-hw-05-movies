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

export const fetchSearchMovies = async (query, params) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

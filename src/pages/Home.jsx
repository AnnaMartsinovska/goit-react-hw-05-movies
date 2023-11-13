import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const location = useLocation();
  const [trendingList, setTrendingList] = useState([]);
  const [setError] = useState('');

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        setTrendingList(data.results);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [setError]);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendingList?.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie?.id}`}>
              {movie.title}
              {movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

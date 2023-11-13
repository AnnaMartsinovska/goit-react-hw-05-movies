import { useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';

import styled from 'styled-components';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    fetchSearchMovies(name).then(data => {
      setMovies(data.results);
    });
  }, [name]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleQuery = () => {
    setSearchParams(query ? { query } : {});
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleQuery();
    }
  };

  if (!movies) {
    return (
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    );
  }
  return (
    <>
      <div>
        <StyledInput
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleQuery}>Search</button>
      </div>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link state={{ from: location }} to={`/movies/${item?.id}`}>
              {item.title}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const StyledInput = styled.input`
  width: 300px;
  margin-bottom: 80px;
  margin-right: 10px;

  &:hover,
  &:focus {
    border-color: blue;
  }
`;

export default Movies;

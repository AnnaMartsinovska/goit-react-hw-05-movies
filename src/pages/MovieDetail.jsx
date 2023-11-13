import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import styled from 'styled-components';
import { Blocks } from 'react-loader-spinner';
import { useHttp } from 'hooks/useHttp';
import { Suspense, useRef } from 'react';

const MovieDetail = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  const [movie] = useHttp(fetchMovieById, movieId);

  if (!movie) {
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
      <button>
        <Link to={goBackRef.current}>Go back</Link>
      </button>

      <StyledWrap>
        <StyledImg
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie.title}
        />
        <StyledText>
          <h2>
            {movie.title}
            {movie.name} ({movie?.release_date})
          </h2>
          <p>User score: {(movie?.vote_average * 10).toFixed(2)}%</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h4>Genres:</h4>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </StyledText>
      </StyledWrap>
      <StyledLinks>
        <p>Additional information:</p>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </StyledLinks>
      <div>
        <Suspense fallback={<Blocks />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

const StyledWrap = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 20px;
`;

const StyledImg = styled.img`
  width: 300px;
  height: auto;
`;

const StyledText = styled.div`
  margin-right: 100px;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export default MovieDetail;

import { useState, useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  if (!cast) {
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
    <div>
      <ul>
        {cast?.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : 'https://st3.depositphotos.com/2546551/18320/v/1600/depositphotos_183205204-stock-illustration-male-avatar-profile-picture-silhouette.jpg'
              }
              alt={actor.name}
              width={150}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

import { useEffect, useState } from 'react';
import { Blocks } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import styled from 'styled-components';

const Reviews = () => {
  const { movieId } = useParams();
  const [rewiew, setRewiew] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setRewiew(data));
  }, [movieId]);

  if (!rewiew) {
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
  if (!rewiew.results.length) {
    return (
      <div>
        <h3>We don't have any reviews for this movie.</h3>
      </div>
    );
  }
  return (
    <div>
      <StyledList>
        {rewiew.results.map(item => (
          <li key={item.id}>
            <p>Author:{item.author}</p>
            <p>
              {item.content}
              {item.overview}
            </p>
          </li>
        ))}
      </StyledList>
    </div>
  );
};

const StyledList = styled.ul`
  padding: 0 100px;
`;

export default Reviews;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <div>
          <h1>Page is not found!</h1>
          <h2>
            You can go to <Link to="/">Home</Link>
          </h2>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: block;
`;

export default NotFound;

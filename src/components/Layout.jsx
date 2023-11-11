import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <StyledLayout>
      <Navigation />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
`;

const StyledOutlet = styled.div`
  margin-top: 50px;
  padding-left: 60px;
`;

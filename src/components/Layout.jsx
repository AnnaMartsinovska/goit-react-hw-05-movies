import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Blocks } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <StyledLayout>
      <Navigation />
      <StyledOutlet>
        <Suspense fallback={<Blocks />}>
          <Outlet />
        </Suspense>
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

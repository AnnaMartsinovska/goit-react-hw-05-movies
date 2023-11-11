import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  background-color: beige;
  box-shadow: 0px 4px 10px 4px gray;
  padding: 34px;
  display: flex;
  gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &.active {
    color: orange;
  }
  &:hover:not(.active) {
    color: gray;
  }
`;

import styled from "styled-components";

export const StyledNavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.neutral.darkGray}; ;
`;

export const StyledLogo = styled.div`
  font-family: antonio;
  display: flex;
  font-size: 28px;
  text-transform: uppercase;
  width: 100%;
  padding-left: 2rem;
`;

export const StyledPlanetsWrapper = styled.div`
  display: flex;
  padding-right: 2rem;
`;

export const StyledUL = styled.ul`
  width: 100%;
  display: flex;
`;

export const StyledLI = styled.li`
  text-transform: uppercase;
  padding-left: 1.8rem;
  list-style: none;
`;

export const StyledH4 = styled.h4`
  cursor: pointer;
  color: ${(props) => props.theme.colors.neutral.lightGray};
`;

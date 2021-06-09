import styled from "styled-components";

export const StyledNavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.neutral.darkGray};

  @media screen and (max-width: 768px) {
    height: 140px;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const StyledLogo = styled.div`
  font-family: antonio;
  display: flex;
  font-size: 28px;
  text-transform: uppercase;
  width: 100%;
  padding-left: 2rem;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    width: auto;
  }
`;

export const StyledPlanetsWrapper = styled.div`
  display: flex;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0;
    justify-content: space-between;
    width: 100%;
  }
`;

export const StyledUL = styled.ul`
  width: 100%;
  display: flex;
`;

export const StyledLI = styled.li`
  text-transform: uppercase;
  padding-left: 1.8rem;
  list-style: none;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const StyledH4 = styled.h4`
  cursor: pointer;
  color: ${(props) => props.theme.colors.neutral.lightGray};

  &:hover {
    color: ${(props) => props.theme.colors.neutral.white};
    transition: ease-in 0.2s;
  }
`;

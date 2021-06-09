import styled from "styled-components";

export const StyledNavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.neutral.darkGray};

  @media screen and (max-width: 1024px) {
    height: 140px;
    flex-direction: column;
    justify-content: space-around;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const StyledLogo = styled.div`
  font-family: antonio;
  display: flex;
  font-size: 28px;
  text-transform: uppercase;
  width: 100%;
  padding-left: 2rem;

  @media screen and (max-width: 1024px) {
    padding-left: 0;
    width: auto;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const StyledPlanetsWrapper = styled.div`
  display: flex;
  padding-right: 2rem;

  @media screen and (max-width: 1024px) {
    padding: 0;
    justify-content: space-between;
    width: 100%;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    display: none;
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

  @media screen and (max-width: 1024px) {
    padding: 0;
    transition: 0.8s all ease;
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

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
    cursor: pointer;
    margin: 0;
  }
`;

import styled from "styled-components";

export const DrawerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;

  transition: 0.8s ease;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "5rem" : "100%")};
`;

export const DrawerWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const DrawerUL = styled.ul`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DrawerLI = styled.li`
  width: 100%;
  list-style: none;
  cursor: pointer;
`;

export const DrawerPlanets = styled.div`
  font-family: "Spartan", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  width: 90%;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  padding: 1.5rem 0;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DrawerPlanetColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.planetColor};
  border-radius: 50%;
  margin: 0;
`;

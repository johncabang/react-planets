import React from "react";
import styled from "styled-components";

import { PlanetProvider } from "./context/PlanetContext";

import Home from "./pages/Home";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 7rem;
  width: 100%;
  position: relative;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

function App() {
  return (
    <StyledContainer>
      <PlanetProvider>
        <Home />
      </PlanetProvider>
    </StyledContainer>
  );
}

export default App;

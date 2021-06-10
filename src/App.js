import React from "react";

import { PlanetProvider } from "./context/PlanetContext";

import Home from "./pages/Home";
import { StyledContainer } from "./styles/AppElements";

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

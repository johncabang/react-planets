import React, { useState } from "react";
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
`;

function App() {
  const [planet, setPlanet] = useState("earth");
  const [content, setContent] = useState("overview");

  return (
    <StyledContainer>
      <PlanetProvider>
        <Home
          planet={planet}
          setPlanet={setPlanet}
          content={content}
          setContent={setContent}
        />
      </PlanetProvider>
    </StyledContainer>
  );
}

export default App;

import React, { useState } from "react";
import styled from "styled-components";

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
      <Home
        planet={planet}
        setPlanet={setPlanet}
        content={content}
        setContent={setContent}
      />
    </StyledContainer>
  );
}

export default App;

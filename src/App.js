import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 7rem;
  width: 100%;
  position: relative;
  height: 100vh;
`;

function App() {
  return (
    <StyledContainer>
      <Home />
    </StyledContainer>
  );
}

export default App;

import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.colors.planets.mercury};
`;

const StyledH4 = styled.h4`
  color: ${(props) => props.theme.colors.neutral.darkGray};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.planets.mercury};
  border: none;
  cursor: pointer;
  padding: 0.1rem 5rem;
`;

function App() {
  return (
    <>
      <StyledH1>The Planets</StyledH1>
      <StyledH4>ROTATION TIME</StyledH4>
      <h2>58.6 DAYS</h2>

      <StyledButton>
        <h3 style={{ background: "transparent" }}>OVERVIEW</h3>
      </StyledButton>

      <p>
        Mercury appears to have a solid silicate crust and mantle overlying a
        solid, iron sulfide outer core layer, a deeper liquid core layer, and a
        solid inner core. The planet's density is the second highest in the
        Solar System at 5.427 g/cm3 , only slightly less than Earth's density.
      </p>
    </>
  );
}

export default App;

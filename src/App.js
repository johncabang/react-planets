import React from "react";
import styled from "styled-components";

const StyledFactsWrapper = styled.div`
  width: 350px;
  height: 100%;
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.colors.neutral.white};
  text-transform: uppercase;
`;

const StyledFactsBody = styled.p`
  color: ${(props) => props.theme.colors.neutral.lightGray};
`;

const StyledH4 = styled.h4`
  color: ${(props) => props.theme.colors.neutral.darkGray};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 176px;
`;

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  cursor: pointer;
  padding: 0.1rem 5rem;
  width: 100%;
  height: 48px;

  &:hover {
    background-color: ${(props) => props.theme.colors.planets.mercury};
    transition: ease-in 0.2s;
  }
`;

const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 255px;
  height: 128px;
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
`;

function App() {
  return (
    <>
      <StyledFactsWrapper>
        <StyledH1>mercury</StyledH1>

        <StyledFactsBody>
          Mercury appears to have a solid silicate crust and mantle overlying a
          solid, iron sulfide outer core layer, a deeper liquid core layer, and
          a solid inner core. The planet's density is the second highest in the
          Solar System at 5.427 g/cm3 , only slightly less than Earth's density.
          <p>Source: Wikipedia</p>
          <StyledButtonWrapper>
            <StyledButton>
              <h3 style={{ background: "transparent" }}>OVERVIEW</h3>
            </StyledButton>
            <StyledButton>
              <h3 style={{ background: "transparent" }}>INTERNAL STRUCTURE</h3>
            </StyledButton>
            <StyledButton>
              <h3 style={{ background: "transparent" }}>SURFACE GEOLOGY</h3>
            </StyledButton>
          </StyledButtonWrapper>
        </StyledFactsBody>
      </StyledFactsWrapper>

      <StyledFooterWrapper>
        <StyledH4>ROTATION TIME</StyledH4>
        <h2>58.6 DAYS</h2>
      </StyledFooterWrapper>
    </>
  );
}

export default App;

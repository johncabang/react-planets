import React from "react";
import mercury from "../../assets/planet-mercury.svg";
import Button from "../Button";

import {
  StyledFactsWrapper,
  Heading,
  StyledFactsBody,
  SourceWrapper,
  SourceTitle,
  SourceLink,
} from "./MainElements";

const Main = ({ planetsDatas }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img src={mercury} alt="mercury" />
      </div>
      <StyledFactsWrapper>
        <Heading>mercury</Heading>
        <StyledFactsBody>
          Mercury appears to have a solid silicate crust and mantle overlying a
          solid, iron sulfide outer core layer, a deeper liquid core layer, and
          a solid inner core. The planet's density is the second highest in the
          Solar System at 5.427 g/cm3 , only slightly less than Earth's density.
        </StyledFactsBody>
        <SourceWrapper>
          <SourceTitle>Source:</SourceTitle>
          <SourceLink>Wikipedia</SourceLink>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </SourceWrapper>
        <Button />
      </StyledFactsWrapper>
    </div>
  );
};

export default Main;

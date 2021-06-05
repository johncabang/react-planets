import React, { useContext } from "react";

import {
  StyledFooterContainer,
  StyledFooterWrapper,
  StyledH2,
  Heading,
} from "./FooterElements";

import { PlanetContext } from "../../context/PlanetContext";

const Footer = ({ planet }) => {
  const [planets] = useContext(PlanetContext);

  const data = planets.planetDatas.filter((val) => val.name === planet);

  return (
    <>
      {data.map((val) => {
        return (
          <StyledFooterContainer key={val.id}>
            <StyledFooterWrapper>
              <Heading>rotation time</Heading>
              <StyledH2>{val.rotation}</StyledH2>
            </StyledFooterWrapper>
            <StyledFooterWrapper>
              <Heading>revolution time</Heading>
              <StyledH2>{val.revolution}</StyledH2>
            </StyledFooterWrapper>
            <StyledFooterWrapper>
              <Heading>radius</Heading>
              <StyledH2>{val.radius}</StyledH2>
            </StyledFooterWrapper>
            <StyledFooterWrapper>
              <Heading>average temp.</Heading>
              <StyledH2>{val.temperature}</StyledH2>
            </StyledFooterWrapper>
          </StyledFooterContainer>
        );
      })}
    </>
  );
};

export default Footer;

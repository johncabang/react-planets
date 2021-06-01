import React from "react";

import {
  StyledFooterContainer,
  StyledFooterWrapper,
  StyledH2,
  Heading,
} from "./FooterElements";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterWrapper>
        <Heading>rotation time</Heading>
        <StyledH2>58.6 days</StyledH2>
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <Heading>revolution time</Heading>
        <StyledH2>87.97 days</StyledH2>
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <Heading>radius</Heading>
        <StyledH2>2,439.7 km</StyledH2>
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <Heading>average temp.</Heading>
        <StyledH2>430&deg;C</StyledH2>
      </StyledFooterWrapper>
    </StyledFooterContainer>
  );
};

export default Footer;

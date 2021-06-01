import React from "react";

import {
  StyledFooterContainer,
  StyledFooterWrapper,
  StyledH2,
  StyledH4,
} from "./FooterElements";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterWrapper>
        <StyledH4>rotation time</StyledH4>
        <StyledH2>58.6 DAYS</StyledH2>
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <StyledH4>revolution time</StyledH4>
        <StyledH2>87.97 DAYS</StyledH2>
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <StyledH4>radius</StyledH4>
        <StyledH2>58.6 DAYS</StyledH2>
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <StyledH4>average temp.</StyledH4>
        <StyledH2>58.6 DAYS</StyledH2>
      </StyledFooterWrapper>
    </StyledFooterContainer>
  );
};

export default Footer;

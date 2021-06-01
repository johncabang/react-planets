import React from "react";
import {
  StyledH4,
  StyledLI,
  StyledLogo,
  StyledNavbarWrapper,
  StyledPlanetsWrapper,
  StyledUL,
} from "./NavbarElements";

const Navbar = ({ planets }) => {
  return (
    <StyledNavbarWrapper>
      <StyledLogo>the planets</StyledLogo>
      <StyledPlanetsWrapper>
        <StyledUL>
          {planets.map((planet) => {
            return (
              <StyledLI key={planet.id}>
                <StyledH4>{planet.name}</StyledH4>
              </StyledLI>
            );
          })}
        </StyledUL>
      </StyledPlanetsWrapper>
    </StyledNavbarWrapper>
  );
};

export default Navbar;

import React from "react";
import {
  StyledH4,
  StyledLI,
  StyledLogo,
  StyledNavbarWrapper,
  StyledPlanetsWrapper,
  StyledUL,
} from "./NavbarElements";

const Navbar = ({ planetDatas, setPlanet }) => {
  return (
    <StyledNavbarWrapper>
      <StyledLogo>the planets</StyledLogo>
      <StyledPlanetsWrapper>
        <StyledUL>
          {planetDatas.map((planet) => {
            return (
              <StyledLI key={planet.id}>
                <StyledH4 onClick={() => setPlanet(planet.name)}>
                  {planet.name}
                </StyledH4>
              </StyledLI>
            );
          })}
        </StyledUL>
      </StyledPlanetsWrapper>
    </StyledNavbarWrapper>
  );
};

export default Navbar;

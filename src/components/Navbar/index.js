import React, { useContext } from "react";
import {
  StyledH4,
  StyledLI,
  StyledLogo,
  StyledNavbarWrapper,
  StyledPlanetsWrapper,
  StyledUL,
} from "./NavbarElements";

import { PlanetContext } from "../../context/PlanetContext";

const Navbar = ({ setPlanet }) => {
  const [planets, setPlanets] = useContext(PlanetContext);

  return (
    <StyledNavbarWrapper>
      <StyledLogo>the planets</StyledLogo>
      <StyledPlanetsWrapper>
        <StyledUL>
          {planets.planetDatas.map((planet) => {
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

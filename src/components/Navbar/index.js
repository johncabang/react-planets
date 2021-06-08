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

const Navbar = () => {
  const [{ planets, setPlanet }] = useContext(PlanetContext);

  return (
    <StyledNavbarWrapper>
      <StyledLogo>the planets</StyledLogo>
      <StyledPlanetsWrapper>
        <StyledUL>
          {planets.planetDatas.map((val) => {
            return (
              <StyledLI key={val.id}>
                <StyledH4 onClick={() => setPlanet(val.name)}>
                  {val.name}
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

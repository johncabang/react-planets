import React, { useContext } from "react";
import {
  StyledH4,
  StyledLI,
  StyledLogo,
  StyledNavbarWrapper,
  StyledPlanetsWrapper,
  StyledUL,
  MobileIcon,
} from "./NavbarElements";

import hamburger from "../../assets/icon-hamburger.svg";

import { PlanetContext } from "../../context/PlanetContext";

const Navbar = () => {
  const [{ planets, setPlanet, toggle }] = useContext(PlanetContext);

  return (
    <StyledNavbarWrapper>
      <StyledLogo>the planets</StyledLogo>
      <MobileIcon onClick={toggle}>
        <img src={hamburger} alt="hamburger" />
      </MobileIcon>
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

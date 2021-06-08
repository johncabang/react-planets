import React, { useContext } from "react";
import {
  StyledButtonWrapper,
  StyledOverviewButton,
  StyledInternalButton,
  StyledGeologyButton,
  Label,
} from "./ButtonElements";

import { PlanetContext } from "../../context/PlanetContext";

const Button = () => {
  const [{ planet, content, setContent }] = useContext(PlanetContext);

  return (
    <StyledButtonWrapper>
      <StyledOverviewButton
        onClick={() => {
          setContent("overview");
        }}
        content={content}
        planet={planet}
      >
        {/* {console.log(planet.planets.planetDatas)} */}
        <Label>overview</Label>
      </StyledOverviewButton>
      <StyledInternalButton
        onClick={() => {
          setContent("internal");
        }}
        content={content}
        planet={planet}
      >
        <Label>internal structure</Label>
      </StyledInternalButton>
      <StyledGeologyButton
        onClick={() => {
          setContent("geology");
        }}
        content={content}
        planet={planet}
      >
        <Label>surface geology</Label>
      </StyledGeologyButton>
    </StyledButtonWrapper>
  );
};

export default Button;

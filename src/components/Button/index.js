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
  const [planet] = useContext(PlanetContext);

  return (
    <StyledButtonWrapper>
      <StyledOverviewButton
        onClick={() => {
          planet.setContent("overview");
        }}
        content={planet.content}
        planet={planet.planet}
      >
        <Label>overview</Label>
      </StyledOverviewButton>
      <StyledInternalButton
        onClick={() => {
          planet.setContent("internal");
        }}
        content={planet.content}
        planet={planet.planet}
      >
        <Label>internal structure</Label>
      </StyledInternalButton>
      <StyledGeologyButton
        onClick={() => {
          planet.setContent("geology");
        }}
        content={planet.content}
        planet={planet.planet}
      >
        <Label>surface geology</Label>
      </StyledGeologyButton>
    </StyledButtonWrapper>
  );
};

export default Button;

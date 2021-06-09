import React, { useContext } from "react";
import {
  StyledButtonWrapper,
  StyledOverviewButton,
  StyledInternalButton,
  StyledGeologyButton,
  Label,
} from "./ButtonElements";

import { PlanetContext } from "../../context/PlanetContext";

const Button = ({ color }) => {
  const [{ content, setContent }] = useContext(PlanetContext);

  // TODOS - FIX DYNAMIC LABELS

  return (
    <StyledButtonWrapper>
      <StyledOverviewButton
        onClick={() => {
          setContent("overview");
        }}
        content={content}
        color={color}
      >
        {/* {console.log(color)} */}
        {/* {console.log(planet.planets.planetDatas)} */}
        <Label>overview</Label>
      </StyledOverviewButton>
      <StyledInternalButton
        onClick={() => {
          setContent("internal");
        }}
        content={content}
        color={color}
      >
        <Label>
          {window.innerWidth <= 500 ? "structure" : "internal structure"}
        </Label>
      </StyledInternalButton>
      <StyledGeologyButton
        onClick={() => {
          setContent("geology");
        }}
        content={content}
        color={color}
      >
        <Label>
          {window.innerWidth <= 500 ? "surface" : "surface geology"}
        </Label>
      </StyledGeologyButton>
    </StyledButtonWrapper>
  );
};

export default Button;

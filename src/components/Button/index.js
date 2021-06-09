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
        <Label>internal structure</Label>
      </StyledInternalButton>
      <StyledGeologyButton
        onClick={() => {
          setContent("geology");
        }}
        content={content}
        color={color}
      >
        <Label>surface geology</Label>
      </StyledGeologyButton>
    </StyledButtonWrapper>
  );
};

export default Button;

import React from "react";
import { StyledButtonWrapper, StyledButton, Label } from "./ButtonElements";

const Button = ({ setContent }) => {
  return (
    <StyledButtonWrapper>
      <StyledButton onClick={() => setContent("overview")}>
        <Label>overview</Label>
      </StyledButton>
      <StyledButton onClick={() => setContent("internal")}>
        <Label>internal structure</Label>
      </StyledButton>
      <StyledButton onClick={() => setContent("geology")}>
        <Label>surface geology</Label>
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;

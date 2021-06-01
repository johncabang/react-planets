import React from "react";
import { StyledButtonWrapper, StyledButton, Label } from "./ButtonElements";

const Button = () => {
  return (
    <StyledButtonWrapper>
      <StyledButton>
        <Label>overview</Label>
      </StyledButton>
      <StyledButton>
        <Label>internal structure</Label>
      </StyledButton>
      <StyledButton>
        <Label>surface geology</Label>
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;

import React from "react";
import { StyledButtonWrapper, StyledButton, Label } from "./ButtonElements";

const Button = ({ planet, content, setContent }) => {
  return (
    <StyledButtonWrapper>
      <StyledButton
        onClick={() => setContent("overview")}
        content={content}
        planet={planet}
      >
        {console.log(planet)}
        {/* {console.log(content)} */}
        <Label>overview</Label>
      </StyledButton>
      <StyledButton
        onClick={() => setContent("internal")}
        content={content}
        planet={planet}
      >
        <Label>internal structure</Label>
      </StyledButton>
      <StyledButton
        onClick={() => setContent("geology")}
        content={content}
        planet={planet}
      >
        <Label>surface geology</Label>
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Button;

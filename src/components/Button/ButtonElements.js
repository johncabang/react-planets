import styled from "styled-components";

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 176px;
  width: 100%;
`;

export const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  cursor: pointer;
  padding: 0.1rem 5rem;
  height: 48px;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.darkGray};
    transition: ease-in 0.2s;
  }
`;

export const Label = styled.h3`
  text-transform: uppercase;
  background: transparent;
`;

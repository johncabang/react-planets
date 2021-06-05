import styled from "styled-components";

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 176px;
  width: 350px;
  margin-right: 0;
`;

export const StyledOverviewButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  cursor: pointer;
  padding: 0.1rem 5rem;
  height: 48px;
  width: 100%;
  background-color: ${({ content }) =>
    content === "overview" ? "salmon" : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.darkGray};
    transition: ease-in 0.2s;
  }
`;

export const StyledInternalButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  cursor: pointer;
  padding: 0.1rem 5rem;
  height: 48px;
  width: 100%;
  background-color: ${({ content }) =>
    content === "internal" ? "pink" : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.darkGray};
    transition: ease-in 0.2s;
  }
`;

export const StyledGeologyButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  cursor: pointer;
  padding: 0.1rem 5rem;
  height: 48px;
  width: 100%;
  background-color: ${({ content }) =>
    content === "geology" ? "aqua" : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.darkGray};
    transition: ease-in 0.2s;
  }
`;

export const Label = styled.h3`
  text-transform: uppercase;
  background: transparent;
`;

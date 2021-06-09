import styled, { css } from "styled-components";

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 176px;
  width: 350px;
  margin-right: 0;

  @media screen and (max-width: 1024px) {
    width: 281px;
    transition: 0.8s all ease;
  }
`;

export const StyledOverviewButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  cursor: pointer;
  padding: 0.1rem 5rem;
  height: 48px;
  width: 100%;

  background-color: ${({ content }) =>
    content === "overview"
      ? css`
          ${(props) => props.color}
        `
      : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.darkGray};
    transition: ease-in 0.2s;
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    transition: 0.8s all ease;
  }
`;

export const StyledInternalButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  cursor: pointer;
  padding: 0.1rem 5rem;
  height: 48px;
  width: 100%;

  background-color: ${({ content }) =>
    content === "internal"
      ? css`
          ${(props) => props.color}
        `
      : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.darkGray};
    transition: ease-in 0.2s;
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    transition: 0.8s all ease;
  }
`;

export const StyledGeologyButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  cursor: pointer;
  padding: 0.1rem 5rem;
  height: 48px;
  width: 100%;

  background-color: ${({ content }) =>
    content === "geology"
      ? css`
          ${(props) => props.color}
        `
      : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.neutral.darkGray};
    transition: ease-in 0.2s;
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    transition: 0.8s all ease;
  }
`;

export const Label = styled.h3`
  text-transform: uppercase;
  background: transparent;
`;

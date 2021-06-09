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

  @media screen and (max-width: 500px) {
    flex-direction: row;
    width: 100%;
    height: auto;
    position: absolute;
    top: 80px;

    border-bottom: 2px solid ${(props) => props.theme.colors.neutral.darkGray};
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

  @media screen and (max-width: 500px) {
    border: none;
    background-color: transparent;
    ${({ content }) =>
      content === "overview"
        ? css`
            border-bottom: 4px solid ${(props) => props.color};
          `
        : "transparent"};
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

  @media screen and (max-width: 500px) {
    border: none;
    background-color: transparent;
    ${({ content }) =>
      content === "internal"
        ? css`
            border-bottom: 4px solid ${(props) => props.color};
          `
        : "transparent"};
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

  @media screen and (max-width: 500px) {
    border: none;
    background-color: transparent;
    ${({ content }) =>
      content === "geology"
        ? css`
            border-bottom: 4px solid ${(props) => props.color};
          `
        : "transparent"};
  }
`;

export const Label = styled.h3`
  text-transform: uppercase;
  background: transparent;
`;

import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 7rem;
  width: 100%;
  position: relative;
  height: 100%;

  @media screen and (max-width: 1024px) {
    padding: 0;
    transition: 0.8s all ease;
  }
`;

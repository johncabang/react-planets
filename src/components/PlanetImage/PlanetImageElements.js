import styled from "styled-components";

export const Image = styled.img`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 75%;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5rem 0;

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    padding: 2rem;
    margin: 0;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 255px;
  height: 120px;
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  margin-left: 0;
  margin-right: 0;

  @media screen and (max-width: 1024px) {
    width: 164px;
    height: 88px;
    margin: 0;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 55px;
    margin-bottom: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Heading = styled.h4`
  color: ${(props) => props.theme.colors.neutral.darkGray};
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 8px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
    padding-left: 2rem;
  }
`;

export const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors.neutral.white};
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 0;
    padding-right: 2rem;
  }
`;

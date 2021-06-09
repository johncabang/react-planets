import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5rem 0;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    margin: 5rem 2rem;
  }
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 255px;
  height: 120px;
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  margin: 0;

  @media screen and (max-width: 768px) {
    width: 164px;
    height: 88px;
  }
`;

export const Heading = styled.h4`
  color: ${(props) => props.theme.colors.neutral.darkGray};
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;

export const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors.neutral.white};
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 7rem;
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 255px;
  height: 120px;
  border: 1px solid ${(props) => props.theme.colors.neutral.darkGray};
  margin: 0;
`;

export const Heading = styled.h4`
  color: ${(props) => props.theme.colors.neutral.darkGray};
  text-transform: uppercase;
`;

export const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colors.neutral.white};
  text-transform: uppercase;
`;

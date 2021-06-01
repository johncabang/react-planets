import styled from "styled-components";

export const StyledFactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.neutral.white};
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
`;

export const StyledFactsBody = styled.p`
  color: ${(props) => props.theme.colors.neutral.lightGray};
  width: 350px;
  margin: 0 0 1.5rem 0;
`;

export const SourceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
  margin-bottom: 1.5rem;
  /* margin: 0 0 1.5rem 0; */
`;

export const SourceTitle = styled.p`
  color: ${(props) => props.theme.colors.neutral.darkGray};
  margin-right: 0.8rem;
`;

export const SourceLink = styled.p`
  color: ${(props) => props.theme.colors.neutral.lightGray};
  margin-right: 0.8rem;
`;

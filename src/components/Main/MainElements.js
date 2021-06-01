import styled from "styled-components";

export const StyledFactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.neutral.white};
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const StyledFactsBody = styled.p`
  color: ${(props) => props.theme.colors.neutral.lightGray};
  width: 350px;
  margin-bottom: 1.5rem;
`;

export const SourceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SourceTitle = styled.p`
  color: ${(props) => props.theme.colors.neutral.darkGray};
  margin-right: 0.5rem;
`;

export const SourceLink = styled.p`
  color: ${(props) => props.theme.colors.neutral.lightGray};
  margin-right: 0.5rem;
`;

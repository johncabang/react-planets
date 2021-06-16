import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 2rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0 2rem;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    padding: 5rem 1rem 0 1rem;
  }
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
`;

export const StyledFactsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledFactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0 0 0;

  @media screen and (max-width: 1024px) {
    margin: 0;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.neutral.white};
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    font-size: 40px;
  }
`;

export const StyledFactsBody = styled(motion.p)`
  color: ${(props) => props.theme.colors.neutral.lightGray};
  width: 350px;
  margin: 0 0 1.5rem 0;

  @media screen and (max-width: 1024px) {
    font-size: 11px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    text-align: center;
    width: 100%;
  }
`;

export const SourceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SourceTitle = styled.p`
  color: ${(props) => props.theme.colors.neutral.darkGray};
  margin-right: 0.8rem;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    margin: 0 0.3rem;
  }
`;

export const SourceLink = styled.a`
  color: ${(props) => props.theme.colors.neutral.lightGray};
  margin-right: 0.8rem;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 500px) {
    margin: 0 0.3rem;
  }
`;

export const SourceImage = styled.img`
  margin: 0 0.3rem;
`;

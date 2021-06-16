import React, { useContext } from "react";
import PlanetImage from "../PlanetImage";
import Button from "../Button";

import { PlanetContext } from "../../context/PlanetContext";

import {
  StyledFactsWrapper,
  StyledImageWrapper,
  StyledFactsContainer,
  Heading,
  StyledFactsBody,
  SourceWrapper,
  SourceTitle,
  SourceLink,
  SourceImage,
  StyledContentContainer,
} from "./ContentElements";

import svg from "../../assets/icon-source.svg";

const Content = () => {
  const [{ planets, planet, content }] = useContext(PlanetContext);

  const data = planets.planetDatas.filter((val) => val.name === planet);
  return (
    <>
      {data.map((val) => {
        return (
          <StyledContentContainer key={val.id}>
            <StyledImageWrapper>
              <PlanetImage />
            </StyledImageWrapper>
            <StyledFactsContainer>
              {content === "overview" && (
                <StyledFactsWrapper>
                  <Heading>{val.name}</Heading>
                  <StyledFactsBody
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {val.overview.content}
                  </StyledFactsBody>
                  <SourceWrapper>
                    <SourceTitle>Source:</SourceTitle>
                    <SourceLink href={val.overview.source} target="_blank">
                      Wikipedia
                    </SourceLink>
                    <SourceImage src={svg} alt="wiki source" />
                  </SourceWrapper>
                </StyledFactsWrapper>
              )}
              {content === "internal" && (
                <StyledFactsWrapper>
                  <Heading>{val.name}</Heading>
                  <StyledFactsBody
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {val.structure.content}
                  </StyledFactsBody>
                  <SourceWrapper>
                    <SourceTitle>Source:</SourceTitle>
                    <SourceLink href={val.structure.source} target="_blank">
                      Wikipedia
                    </SourceLink>
                    <SourceImage src={svg} alt="wiki source" />
                  </SourceWrapper>
                </StyledFactsWrapper>
              )}
              {content === "geology" && (
                <StyledFactsWrapper>
                  <Heading>{val.name}</Heading>
                  <StyledFactsBody
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {val.geology.content}
                  </StyledFactsBody>
                  <SourceWrapper>
                    <SourceTitle>Source:</SourceTitle>
                    <SourceLink href={val.geology.source} target="_blank">
                      Wikipedia
                    </SourceLink>
                    <SourceImage src={svg} alt="wiki source" />
                  </SourceWrapper>
                </StyledFactsWrapper>
              )}
              <Button color={val.color} />
            </StyledFactsContainer>
          </StyledContentContainer>
        );
      })}
    </>
  );
};

export default Content;

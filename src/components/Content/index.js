import React, { useContext } from "react";
import PlanetImage from "../PlanetImage";
import Button from "../Button";

import { PlanetContext } from "../../context/PlanetContext";

import {
  StyledFactsWrapper,
  Heading,
  StyledFactsBody,
  SourceWrapper,
  SourceTitle,
  SourceLink,
  StyledImageWrapper,
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
            <StyledFactsWrapper>
              <Heading>{val.name}</Heading>
              {content === "overview" && (
                <>
                  <StyledFactsBody>{val.overview.content}</StyledFactsBody>
                  <SourceWrapper>
                    <SourceTitle>Source:</SourceTitle>
                    <SourceLink href={val.overview.source} target="_blank">
                      Wikipedia
                    </SourceLink>
                    <img src={svg} alt="wiki source" />
                  </SourceWrapper>
                </>
              )}
              {content === "internal" && (
                <>
                  <StyledFactsBody>{val.structure.content}</StyledFactsBody>
                  <SourceWrapper>
                    <SourceTitle>Source:</SourceTitle>
                    <SourceLink href={val.structure.source} target="_blank">
                      Wikipedia
                    </SourceLink>
                    <img src={svg} alt="wiki source" />
                  </SourceWrapper>
                </>
              )}
              {content === "geology" && (
                <>
                  <StyledFactsBody>{val.geology.content}</StyledFactsBody>
                  <SourceWrapper>
                    <SourceTitle>Source:</SourceTitle>
                    <SourceLink href={val.geology.source} target="_blank">
                      Wikipedia
                    </SourceLink>
                    <img src={svg} alt="wiki source" />
                  </SourceWrapper>
                </>
              )}
              <Button />
            </StyledFactsWrapper>
          </StyledContentContainer>
        );
      })}
    </>
  );
};

export default Content;

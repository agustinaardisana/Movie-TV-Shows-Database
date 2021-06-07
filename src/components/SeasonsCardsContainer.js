import styled from "styled-components";
//
import { Flex } from "./Commons";
import EpisodesCard from "./EpisodesCard";

const FlexContainer = styled(Flex)`
  @media (max-width: ${(props) => props.theme.breakpoints.large}) {
    /* justify-content: center; */
  }

  /* @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    width: 30%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    width: 45%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.extraSmall}) {
    width: 90%;
  } */
`;

const SeasonsCardsContainer = ({ episodes }) => {
  return (
    <FlexContainer flexWrap="wrap" justifyContent="center">
      {episodes &&
        episodes.map((episode) => (
          <EpisodesCard key={episode.id} info={episode} />
        ))}
    </FlexContainer>
  );
};

export default SeasonsCardsContainer;

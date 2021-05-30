import EpisodesCard from "./EpisodesCard";
import styled from "styled-components";
import { Flex } from "./Commons";

const FlexContainer = styled(Flex)`
  /* style */
`;

const SeasonsCardsContainer = ({ episodes }) => {
  return (
    <FlexContainer flexWrap="wrap" justifyContent="space-between">
      {episodes &&
        episodes.map((episode) => (
          <EpisodesCard key={episode.id} info={episode} />
        ))}
    </FlexContainer>
  );
};

export default SeasonsCardsContainer;

import { Flex } from "./Commons";
import EpisodesCard from "./EpisodesCard";

const SeasonsCardsContainer = ({ episodes }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {episodes &&
        episodes.map((episode) => (
          <EpisodesCard key={episode.id} info={episode} />
        ))}
    </Flex>
  );
};

export default SeasonsCardsContainer;

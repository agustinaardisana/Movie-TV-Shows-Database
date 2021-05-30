import { useLocation } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import SeasonsCardsContainer from "../components/SeasonsCardsContainer";
import SeasonsSelect from "../components/SeasonsSelect";
import { Flex } from "../components/Commons";

const StyledSection = styled(Flex)`
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Seasons = ({ seasons }) => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const id = location.state.id;
  const info = useFetch(id, mediaType, "season/1");
  const episodes = info && info.episodes;

  return (
    <StyledSection as="section" flexDirection="column" justifyContent="center">
      <SeasonsSelect seasons={seasons} />
      <SeasonsCardsContainer episodes={episodes} />
    </StyledSection>
  );
};

export default Seasons;

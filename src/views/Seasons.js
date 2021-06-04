import { useHistory, useParams } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import SeasonsCardsContainer from "../components/SeasonsCardsContainer";
import SeasonsSelect from "../components/SeasonsSelect";
import { Flex } from "../components/Commons";
import { useState } from "react";

const StyledSection = styled(Flex)`
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Seasons = ({ seasons, id }) => {
  const params = useParams();
  const history = useHistory();
  const mediaType = "tv";
  const seasonNumber = params.seasonNumber;
  const { info } = useFetch(id, mediaType, `season/${seasonNumber}`);
  const episodes = info && info.episodes;

  const changeSeasonNumberValue = (e) => {
    history.push(`/tv/${id}/seasons/${e.target.value}`);
  };

  return (
    <StyledSection as="section" flexDirection="column" justifyContent="center">
      <SeasonsSelect
        seasons={seasons}
        changeSeasonNumberValue={changeSeasonNumberValue}
        seasonNumber={seasonNumber}
      />
      <SeasonsCardsContainer episodes={episodes} />
    </StyledSection>
  );
};

export default Seasons;

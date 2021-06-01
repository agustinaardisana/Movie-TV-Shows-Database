import { useLocation, useHistory } from "react-router-dom";
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

const Seasons = ({ seasons }) => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const id = location.state.id;
  const [seasonNumber, setSeasonNumber] = useState(1);
  const history = useHistory();
  const info = useFetch(id, mediaType, `season/${seasonNumber}`);
  const episodes = info && info.episodes;
  console.log(info);

  const changeSeasonNumberValue = (e) => {
    setSeasonNumber(e.target.value);
    // history.push(`/tv/${id}/seasons/${seasonNumber}`);
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

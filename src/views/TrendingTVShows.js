import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";

const TrendingShowsContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const TrendingTVShows = () => {
  let location = useLocation();
  const mediaType = "tv";
  const info = useFetch(location.pathname, mediaType);
  return (
    <TrendingShowsContainer>
      <CardSection
        title="Series que son tendencia"
        mediaType={mediaType}
        info={info}
      ></CardSection>
    </TrendingShowsContainer>
  );
};

export default TrendingTVShows;

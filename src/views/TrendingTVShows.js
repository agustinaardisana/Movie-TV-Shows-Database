import styled from "styled-components";
import CardSection from "../components/CardSection";

const TrendingShowsContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const trendingTVShows = () => {
  return (
    <TrendingShowsContainer>
      <CardSection
        title="Series que son tendencia"
        // dataTV={dataTV}
        mediaType="tv"
      ></CardSection>
    </TrendingShowsContainer>
  );
};

export default trendingTVShows;

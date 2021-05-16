import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";

const TrendingMoviesContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const TrendingMovies = () => {
  let location = useLocation();
  const mediaType = "movie";
  const info = useFetch(location.pathname, mediaType);
  return (
    <TrendingMoviesContainer>
      <CardSection
        title="Peliculas que son tendencia"
        mediaType={mediaType}
        info={info}
      ></CardSection>
    </TrendingMoviesContainer>
  );
};

export default TrendingMovies;

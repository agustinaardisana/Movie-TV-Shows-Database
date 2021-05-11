import styled from "styled-components";
import CardSection from "../components/CardSection";

const TrendingMoviesContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const trendingMovies = () => {
  return (
    <TrendingMoviesContainer>
      <CardSection
        title="Peliculas que son tendencia"
        // dataMovies={dataMovies}
        mediaType="movie"
      ></CardSection>
    </TrendingMoviesContainer>
  );
};

export default trendingMovies;

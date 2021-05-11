import styled from "styled-components";
import CardSection from "../components/CardSection";

const MoviesContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Movie = () => {
  return (
    <MoviesContainer>
      <CardSection
        title="Peliculas Populares"
        // dataMovies={dataMovies}
        mediaType="movie"
      ></CardSection>
      <CardSection
        title="Peliculas con mejores criticas"
        // dataMovies={dataMovies}
        mediaType="movie"
      ></CardSection>
      <CardSection
        title="Peliculas a estrenar"
        // dataMovies={dataMovies}
        mediaType="movie"
      ></CardSection>
      <CardSection
        title="Peliculas en cine"
        // dataMovies={dataMovies}
        mediaType="movie"
      ></CardSection>
    </MoviesContainer>
  );
};

export default Movie;

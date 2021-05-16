import styled from "styled-components";
import CardSection from "../components/CardSection";

const MoviesContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Movie = () => {
  return (
    <MoviesContainer>
      <CardSection title="Peliculas Populares" mediaType="movie"></CardSection>
      <CardSection
        title="Peliculas con mejores criticas"
        mediaType="movie"
      ></CardSection>
      <CardSection title="Peliculas a estrenar" mediaType="movie"></CardSection>
      <CardSection title="Peliculas en cine" mediaType="movie"></CardSection>
    </MoviesContainer>
  );
};

export default Movie;
